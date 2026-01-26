export default class Typewriter {
  constructor(element, options = {}) {
    this.element = element;
    this.codeText = options.codeText || 'new SoftwareEngineer("Rajiv");';
    this.finalText = options.finalText || "RAJIV PHILIP";
    this.typeSpeed = options.typeSpeed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseDuration = options.pauseDuration || 1000;

    this.isDeleting = false;
    this.txt = "";
    this.isCodePhase = true;
    this.tick();
  }

  tick() {
    const fullTxt = this.isCodePhase ? this.codeText : this.finalText;

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="txt">${this.txt}</span>`;
    let delta = this.typeSpeed - Math.random() * 50;

    if (this.isDeleting) {
      delta = this.deleteSpeed;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      if (this.isCodePhase) {
        delta = this.pauseDuration;
        this.isDeleting = true;
      } else {
        this.element.classList.add("typing-complete");
        return;
      }
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.isCodePhase = false;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}
