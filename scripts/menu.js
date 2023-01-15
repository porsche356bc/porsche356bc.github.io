const xmlMenu="/XML/menu.xml";
const xslMenu="xml/menu.xsl"

// function defined in main.js
// loadAreaMap();
       

function addMenuEventListeners() {
    const menu = document.getElementById("menu");
    console.log("menu: ", menu);menu
    const menuItems = menu.getElementsByTagName("a");
    console.log("menuitems to listen to: ", menuItems[1]);
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function (event) {
            event.preventDefault();
            loadAreaMap(this);
            loadPartsList(this);
        });
    }
}

// generated by ChatGPT - with some prompting, but still impressive!

function generateMenu(xml, xsl) {
    // Create an XSLT processor
    var xsltProcessor = new XSLTProcessor();
  
    // Import the stylesheet into the processor
    xsltProcessor.importStylesheet(xsl);
  
    // Transform the XML data using the stylesheet
    var fragment = xsltProcessor.transformToFragment(xml, document);
  
    // Insert the HTML into the page
    document.getElementsByClassName("menu")[0].appendChild(fragment);
}
  
  
// Load the XML and XSL files, then generate the menu
loadXML(xmlMenu, function(xml) {
    console.log("loaded xml: ", xml);
    loadXML(xslMenu, function(xsl) {
        generateMenu(xml, xsl);
        addMenuEventListeners();
    });

});
