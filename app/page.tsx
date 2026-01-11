"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import ChannelList from "@/components/ChannelList";
import StreamPlayer from "@/components/StreamPlayer";
import { channels } from "@/data/channels";

export default function Home() {
  const initialChannelId = channels[0]?.id;
  const initialUrl = channels[0]?.sources[0]?.url;

  const storageKey = "streaming-tv:selected";

  const [activeChannelId, setActiveChannelId] = useState<string | undefined>(
    initialChannelId,
  );
  const [activeUrl, setActiveUrl] = useState<string | undefined>(initialUrl);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        setHydrated(true);
        return;
      }
      const saved = JSON.parse(raw) as unknown;
      if (
        typeof saved === "object" &&
        saved !== null &&
        "channelId" in saved &&
        "url" in saved &&
        typeof (saved as { channelId: unknown }).channelId === "string" &&
        typeof (saved as { url: unknown }).url === "string"
      ) {
        const channelId = (saved as { channelId: string }).channelId;
        const url = (saved as { url: string }).url;

        const ch = channels.find((c) => c.id === channelId);
        if (ch) {
          const src = ch.sources.find((s) => s.url === url);
          setActiveChannelId(ch.id);
          setActiveUrl(src?.url ?? ch.sources[0]?.url);
        }
      }
    } catch {
    } finally {
      setHydrated(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    if (!activeChannelId || !activeUrl) return;
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ channelId: activeChannelId, url: activeUrl }),
      );
    } catch {
    }
  }, [activeChannelId, activeUrl, hydrated, storageKey]);

  const activeChannelName = useMemo(() => {
    const ch = channels.find((c) => c.id === activeChannelId);
    return ch?.name;
  }, [activeChannelId]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-6 text-white md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/dede.png" alt="Emblème" width={58} height={58} />
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-wide text-white">
                Dede TV
              </div>
              <div className="text-xs text-neutral-400">
                Lecteur intégré (sources autorisées uniquement)
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <section className="lg:col-span-3">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-neutral-200">
                {activeChannelName ?? "Lecteur"}
              </div>
              <div className="text-xs text-neutral-400">
                Sandbox activé (anti-popups)
              </div>
            </div>
            <StreamPlayer url={activeUrl} title={activeChannelName} autoPlay />
          </section>

          <ChannelList
            channels={channels}
            activeChannelId={activeChannelId}
            activeUrl={activeUrl}
            onSelect={(channelId, url) => {
              setActiveChannelId(channelId);
              setActiveUrl(url);
            }}
          />
        </div>
      </div>
    </main>
  );
}
