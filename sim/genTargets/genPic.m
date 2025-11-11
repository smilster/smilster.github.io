function genPic(baseName,string,alignment,compiler)
  texFile = [ baseName ".tex"];

  display(["generate " baseName])

  system(["cp genPic.tex " texFile]);
  system(["sed -i \'s/ALIGNMENT/" alignment "/g\' " texFile]);
  system(["sed -i \'s/STRING/" string "/g\' " texFile]);
  system([compiler " " texFile " > /dev/null"]);
  system(["pdfcrop " baseName ".pdf > /dev/null"]);
  system(["mv " baseName "-crop.pdf " baseName ".pdf"]);
  system(["convert -density 1500 " baseName ".pdf -quality 90 pics/" baseName ".jpg > /dev/null 2>&1"]);
  system(["rm " baseName ".log; rm " baseName ".aux; rm " baseName ".tex; rm " baseName ".pdf"]);

end
