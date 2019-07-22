window.onload = function() {
  // showdown converts text to HTML
  let converter = new showdown.Converter();
  // document areas
  let pad = document.getElementById("pad");
  let markdownArea = document.getElementById("markdown");

  let convertTextAreaToMarkdown = function() {
    let markdownText = pad.value;
    // converts the text into HTML
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  // listens for edits in the area and converts to markdown live
  pad.addEventListener("input", convertTextAreaToMarkdown);

  convertTextAreaToMarkdown();
};
