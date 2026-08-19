export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "bwin",
    name: "Bwin",
    logo: "/images/bwin_dark.png",
    rating: 10.0,
    bonus: "Joga 10€, Ganha 100 Rodadas Grátis",
    url: "https://www.bwin.pt/pt/engage/lan/casino/generic?wm=5522822&btag=Bwin-SRJ101&tpdeh=",
    isMobile: true,
    votes: 173,
  },
];
