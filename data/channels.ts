export type ChannelSource = {
  label: string;
  url: string;
};

export type Channel = {
  id: string;
  name: string;
  sources: ChannelSource[];
};

export const channels: Channel[] = [
  
  {
    
    id: "tv0",
    name: "Top",
    sources: [
      { label: "Maroc vs Senegal", url: "https://cdn.live.easybroadcast.io/abr_corp/83_medi1tv-afrique_tm7tu45/corp/83_medi1tv-afrique_tm7tu45_360p/chunks.m3u8" },
    ],
  },
  {

    id: "tv1",
    name: "Sport",
    sources: [
      { label: "L'Equipe", url: "https://live2.eu-north-1b.cf.dmcdn.net/sec2(ZV2Yb6oue8VE2_1hABj7O2dpM7MUtonpCYeM0zHENL-emBzI5qjPcTwBAZ-fI0kytDsij8Cu7l4wq7ECk5EgduuVVV-NscZuTE8_lzrFDGNPhhkdR2mwhlSleG0qHqTB)/cloud/3/x6hczsw/d/live-720@60.m3u8" },
      { label: "Africa 24 Sport", url: "https://edge15.vedge.infomaniak.com/livecast/ik:africa24sport/chunklist_w1834517297.m3u8" },
      { label: "Euro Sport 1", url: "https://live2.eu-north-1a.cf.dmcdn.net/sec2(DsXTkrovPsxWjBZj6s2-PmhQHkT2iKLhJIcXBbWd2bHeH27azL0RDkTXKcKQdL-SWiufo_NSrXn0n39SknQhxM4d_k3OuiR0uj2yncFz3fMAHflr_paY3X8Puyuwn60x)/cloud/3/x9lx07s/d/live-720@60.m3u8" },
      { label: "Euro Sport 2", url: "https://live2.eu-north-1b.cf.dmcdn.net/sec2(5xMPLCfHZ4O8l9MZU1JmSkERDwyNwpzBB5d5E9UDmR51xVVIafLt5IQBKwcnJOJ1UprP6FsfMkiyI2wheu4QUxJm6kUI_LCofvyKZFVdM6xVpkAOYS3710gz_DdswQzO)/cloud/3/x9lx0e4/d/live-720@60.m3u8" },
      { label: "FIFA+", url: "https://9b839ec7.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1mcl9GSUZBUGx1c0ZyZW5jaF9ITFM/playlist.m3u8?ads.wurl_channel=1778&ads.wurl_name=FIFAPlusFrench&ads.coppa=0&ads.psid=%7BPSID%7D&ads.targetopt=%7BTARGETOPT%7D&ads.app_domain=%7BAPP_DOMAIN%7D&ads.app_name=%7BAPP_NAME%7D&ads.consent=%7BTC_STRING%7D" },
      { label: "Bein Sports Xtra", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bein-sports-xtra-en-espanol/playlist.m3u8" },
      { label: "Infosport", url: "http://212.102.60.80/Infosport/index.m3u8" },
      { label: "Real TV", url: "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8" },
      { label: "Sportdigital", url: "https://d162h6qqsk8wvl.cloudfront.net/8c880c40-991d-4253-aae9-754f1ed050ce/video_4.m3u8"},
      { label: "ATG", url: "https://kanal75xto-llhls.akamaized.net/live/Data/atg-kanal-15-02a-rr/HLS-Legacy-HL/atg-kanal-15-02a-rr-avc1_3000000=658412288-mp4a_128000=497751258.m3u8"},
      { label: "Trace Sport Stars", url: "https://tracesportstars-klowdtv.amagi.tv/playlist720P.m3u8" },
    ],
  },
  {
    id: "tv2",
    name: "Journal",
    sources: [
      { label: "Canal+", url: "https://cache1a.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzY4MTkyNzU1Iiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy9jYW5hbHBsdXNjbGFpci9icm93c2VyLUhMUzgvIiwic2Vzc2lvbl9jZG5faWQiOiI2NTUzZGIyMDY5Zjc5Yjc2Iiwic2Vzc2lvbl9pZCI6IiIsImNsaWVudF9pZCI6IiIsImRldmljZV9pZCI6IiIsIm1heF9zZXNzaW9ucyI6MCwic2Vzc2lvbl9kdXJhdGlvbiI6MCwidXJsIjoiaHR0cHM6Ly8xMC4wLjIyOS4yMiIsInNlc3Npb25fdGltZW91dCI6MCwiYXVkIjoiNTMiLCJzb3VyY2VzIjpbODRdfQ==.acYYiDKx-ACBXzHq0IBvnTH7iyb1NBmxY_Nkr3nVbBPLbT4TRpgs_fHGwCWD4ULh8rh-fnVcKtB-ADnNS7RSbQ==/live/eds/canalplusclair/browser-HLS8/canalplusclair-avc1_2000000=10004.m3u8" },
      { label: "TF1", url: "https://cachehsi1a.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzY4MTcwOTY1Iiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy90ZjFoZC9icm93c2VyLUhMUzgvIiwic2Vzc2lvbl9jZG5faWQiOiJiZGEyZjk5OGUwZmExZTJiIiwic2Vzc2lvbl9pZCI6IiIsImNsaWVudF9pZCI6IiIsImRldmljZV9pZCI6IiIsIm1heF9zZXNzaW9ucyI6MCwic2Vzc2lvbl9kdXJhdGlvbiI6MCwidXJsIjoiaHR0cHM6Ly8xMC4wLjIyOS4yMiIsInNlc3Npb25fdGltZW91dCI6MCwiYXVkIjoiNDEiLCJzb3VyY2VzIjpbODRdfQ==.0aRhgOUSSvE2XBDfWftQvM6np3QyLJkQ9-pXXDVq64kC4QknMWk5dB-20U8J8cuNVpGiQV99SR1jh7zqkEeG5Q==/live/eds/tf1hd/browser-HLS8/tf1hd-avc1_700000=10000.m3u8" },
      { label: "France 24", url: "https://live.france24.com/hls/live/2037179-b/F24_FR_HI_HLS/master_5000.m3u8" },
      { label: "RT France", url: "https://rt-fra.rttv.com/dvr/rtfrance/playlist_2500Kb.m3u8" },
      { label: "TV5 Monde", url: "https://cachehsi1a.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzY4MTc0MDk4Iiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy90djVtb25kZWZicy9icm93c2VyLUhMUzgvIiwic2Vzc2lvbl9jZG5faWQiOiJiNTRjZjFhN2VlMDgyYjYwIiwic2Vzc2lvbl9pZCI6IiIsImNsaWVudF9pZCI6IiIsImRldmljZV9pZCI6IiIsIm1heF9zZXNzaW9ucyI6MCwic2Vzc2lvbl9kdXJhdGlvbiI6MCwidXJsIjoiaHR0cHM6Ly8xMC4wLjIyOS4xOCIsInNlc3Npb25fdGltZW91dCI6MCwiYXVkIjoiNDEiLCJzb3VyY2VzIjpbMTAwXX0=.gMI28MRkH2sAwFNhecLp_xkzHy_6JKUfuoatRhN8o7zpiYykvILot9bK_PmyqEqyrM7u3S89gi944afsm0lo3w==/live/eds/tv5mondefbs/browser-HLS8/tv5mondefbs-avc1_1800000=10001.m3u8" },
      { label: "France 3", url: "https://cache1a.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzY4MTkxNjk2Iiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy9mcmFuY2UzaGQvYnJvd3Nlci1ITFM4LyIsInNlc3Npb25fY2RuX2lkIjoiYzkyZGVkOGZkMGY4YTRiNyIsInNlc3Npb25faWQiOiIiLCJjbGllbnRfaWQiOiIiLCJkZXZpY2VfaWQiOiIiLCJtYXhfc2Vzc2lvbnMiOjAsInNlc3Npb25fZHVyYXRpb24iOjAsInVybCI6Imh0dHBzOi8vMTAuMC4yMjkuMTgiLCJzZXNzaW9uX3RpbWVvdXQiOjAsImF1ZCI6IjUzIiwic291cmNlcyI6WzEwMF19.wIeTI2LLSO66bpHhBmtIYig8DbwYB_mw8avCViaIVb68QVvAgPU_bZjO3WS8Lyoz2waSvtdmrvxr3kQUj8zLVQ==/live/eds/france3hd/browser-HLS8/france3hd-avc1_2000000=10004.m3u8" },

    ],
  },
  {
    id: "tv3",
    name: "Musique",
    sources: [
      { label: "Trace Urban", url: "https://lightning-traceurban-samsungau.amagi.tv/playlist.m3u8" },
    ],
  },
  {
    id: "tv4",
    name: "Dessin Animé et Manga",
    sources: [
      { label: "Gong", url: "https://amg01596-gongnetworks-gong-ono-vh5f2.amagi.tv/1080p-vtt/index.m3u8" },
      { label: "ADN", url: "https://d3b73b34o7cvkq.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-gz2sgqzp076kf/adn.m3u8?ads.device_did=%7BPSID%7D&ads.device_dnt=%7BTARGETOPT%7D&ads.app_domain=%7BAPP_DOMAIN%7D&ads.app_name=%7BAPP_NAME%7D&ads.consent=%7BTC_STRING%7D&ads.ssai_vendor=SSSLIVE&ads.service_id=FRBD5100001ZA" },
    ],
  },
  {
    id: "tv5",
    name: "Documentaire",
    sources: [
      { label: "KTO", url: "https://cache1a.netplus.ch/tok_eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNzY4NDY4MzAyIiwic2lwIjoiIiwicGF0aCI6Ii9saXZlL2Vkcy9rdG8vYnJvd3Nlci1ITFM4LyIsInNlc3Npb25fY2RuX2lkIjoiYzdkODU0Yzk5MDVhMDQ4NiIsInNlc3Npb25faWQiOiIiLCJjbGllbnRfaWQiOiIiLCJkZXZpY2VfaWQiOiIiLCJtYXhfc2Vzc2lvbnMiOjAsInNlc3Npb25fZHVyYXRpb24iOjAsInVybCI6Imh0dHBzOi8vMTAuMC4yMjkuMTgiLCJzZXNzaW9uX3RpbWVvdXQiOjAsImF1ZCI6IjUzIiwic291cmNlcyI6WzEwMF19.WIsjHaymob4thsTPNoscX10aXVlVX5IIZQGbLP5tPpF3aRI5yHIKmGa3wvZ3N1sojwxU3dlav0U3pyaTXwC3Bg==/live/eds/kto/browser-HLS8/kto-avc1_1300000=10002.m3u8" },
    ],
  }

];
