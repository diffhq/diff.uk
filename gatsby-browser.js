exports.onClientEntry = () => {
  // The value in the --wh custom property set to the root of the document
  document.documentElement.style.setProperty("--wh", `${window.innerHeight}px`);
  window.addEventListener("resize", () => {
    document.documentElement.style.setProperty(
      "--wh",
      `${window.innerHeight}px`
    );
  });
};
