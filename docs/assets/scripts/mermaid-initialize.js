window.onload = function() {
  const element = document.querySelector(".language-mermaid");
  if (element) {
    element.classList.add('mermaid');

    mermaid.initialize({startOnLoad:true});
  }
};
