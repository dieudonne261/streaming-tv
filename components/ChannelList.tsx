import type { Channel } from "@/data/channels";

import { useMemo, useState } from "react";

type ChannelListProps = {
  channels: Channel[];
  activeChannelId?: string;
  activeUrl?: string;
  onSelect: (channelId: string, url: string) => void;
};

export default function ChannelList({
  channels,
  activeChannelId,
  activeUrl,
  onSelect,
}: ChannelListProps) {
  const [query, setQuery] = useState("");

  const filteredChannels = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return channels;

    return channels.filter((ch) => {
      if (ch.name.toLowerCase().includes(q)) return true;
      return ch.sources.some((src) => src.label.toLowerCase().includes(q));
    });
  }, [channels, query]);

  return (
    <aside className="rounded-lg border border-neutral-800 bg-[#121212] p-4">
      <div className="mb-3 text-sm font-semibold text-neutral-200">
        Chaînes disponibles
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher une chaîne…"
        className="mb-4 w-full rounded-md border border-neutral-800 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-neutral-600"
      />
      <div className="flex flex-col gap-4">
        {filteredChannels.length === 0 ? (
          <div className="text-sm text-neutral-400">Aucun résultat</div>
        ) : null}
        {filteredChannels.map((ch) => (
          <div key={ch.id} className="flex flex-col gap-2">
            <div
              className={
                ch.id === activeChannelId
                  ? "text-sm font-semibold text-white"
                  : "text-sm text-neutral-300"
              }
            >
              {ch.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {ch.sources.map((src) => {
                const selected = ch.id === activeChannelId && src.url === activeUrl;
                return (
                  <button
                    key={`${ch.id}:${src.label}`}
                    type="button"
                    onClick={() => onSelect(ch.id, src.url)}
                    className={
                      selected
                        ? "rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white"
                        : "rounded-md bg-neutral-700 px-3 py-1 text-xs text-white hover:bg-neutral-600"
                    }
                  >
                    {src.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
