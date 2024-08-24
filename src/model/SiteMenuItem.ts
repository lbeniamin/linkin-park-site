export class SiteMenuItem {
  name: string;
  icon: string;
  address: string;

  constructor(data?: Partial<SiteMenuItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
