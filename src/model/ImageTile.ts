export class ImageTile {
  src: string;
  title: string;
  description: string;

  constructor(data?: Partial<ImageTile>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
