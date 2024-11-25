export class ShareValueChildren {
  // Variable privada
  private value: string;

  //
  constructor(value: string) {
    this.value = value;
  }

  // Getters and Setters
  // Obtener el valor de manera controlada
  getValue() {
    return this.value;
  }

  // Controla como insertas el valor

  setValue(value: string) {
    if (typeof value === "string" && value.length < 1) {
      throw new Error("Value has to be a non-empty string");
    }
    this.value = value;
  }
}

export const shareValueChildren = new ShareValueChildren("");
