import { useEffect, useRef, useState } from "react";

import Hls from "hls.js";

type StreamPlayerProps = {
  url?: string;
  title?: string;
  autoPlay?: boolean;
};

function getUrlError(url: string): string | null {
  const trimmed = url.trim();

  if (trimmed.toLowerCase().includes("<iframe")) {
    return "Tu as collé un tag <iframe> complet. Dans channels.ts, mets uniquement l'URL du src (ex: https://exemple.com/player).";
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return "URL invalide: le protocole doit être http(s).";
    }
  } catch {
    return "URL invalide: mets une URL complète (http/https) dans channels.ts.";
  }

  return null;
}

function isHlsUrl(url: string): boolean {
  return url.trim().toLowerCase().includes(".m3u8");
}

function HlsVideoPlayer({
  url,
  title,
  autoPlay,
}: {
  url: string;
  title?: string;
  autoPlay?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [muted, setMuted] = useState(!!autoPlay);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const trimmed = url.trim();

    const tryAutoPlay = async () => {
      if (!autoPlay) return;
      try {
        setMuted(true);
        video.muted = true;
        await video.play();
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = trimmed;

      void tryAutoPlay();
      return;
    }

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(trimmed);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void tryAutoPlay();
      });
    } else {
      video.src = trimmed;
      void tryAutoPlay();
    }

    return () => {
      hls?.destroy();
    };
  }, [autoPlay, url]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-800 bg-black shadow-2xl">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full"
        controls
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
        muted={muted}
        title={title ?? "Lecteur"}
      />
      {autoplayBlocked ? (
        <div className="absolute inset-0 grid place-items-center bg-black/60">
          <button
            type="button"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white"
            onClick={async () => {
              const video = videoRef.current;
              if (!video) return;
              try {
                setMuted(false);
                video.muted = false;
                await video.play();
                setAutoplayBlocked(false);
              } catch {
                setAutoplayBlocked(true);
              }
            }}
          >
            Cliquer pour lire
          </button>
        </div>
      ) : null}
    </div>
  );
}

function IframePlayer({ url, title }: { url: string; title?: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-800 bg-black shadow-2xl">
      <iframe
        key={url}
        src={url}
        title={title ?? "Lecteur"}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-forms allow-scripts allow-same-origin allow-presentation"
      />
    </div>
  );
}

export default function StreamPlayer({ url, title, autoPlay }: StreamPlayerProps) {
  if (!url) {
    return (
      <div className="aspect-video w-full rounded-lg border border-neutral-800 bg-black/40 grid place-items-center text-neutral-300">
        Sélectionnez une source
      </div>
    );
  }

  const error = getUrlError(url);
  if (error) {
    return (
      <div className="aspect-video w-full rounded-lg border border-neutral-800 bg-black/40 grid place-items-center px-6 text-center text-sm text-neutral-300">
        {error}
      </div>
    );
  }

  if (isHlsUrl(url)) {
    return <HlsVideoPlayer url={url} title={title} autoPlay={autoPlay} />;
  }

  return <IframePlayer url={url} title={title} />;
}
