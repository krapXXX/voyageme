import type { TeamPageSection } from "../../team/model/Team";

export default class TeamDao {
    static cacheTeam: Array<TeamPageSection> | undefined;

    static getTeam() {
        return new Promise<Array<TeamPageSection>>((resolve, _) => {
            if (this.cacheTeam) {
                resolve(this.cacheTeam);
                return;
            }

            setTimeout(() => {
                this.cacheTeam = [
  {
    name: "Iryna Kovalenko",
    position: "founder and inspiration",
    imageUrl: "/img/iryna.png"
  },
  {
    name: "Maria Lytvyn",
    position: "tourism manager",
    imageUrl: "/img/maria.png"
  },
  {
    name: "Olexandr Kushnir",
    position: "expert (exotic destinations)",
    imageUrl: "/img/alex.png"
  },
  {
    name: "Anna Voronina",
    position: "service coordinator",
    imageUrl: "/img/anna.png"
  }
];
                resolve(this.cacheTeam);
            }, 300);
        });
    }
}
