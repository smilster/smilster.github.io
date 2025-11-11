function y = genPicsFromWords(compiler)

##
  name={'0','Sebastian\\\\ Milster','c'};
  einstein={'einstein','$D=\\dfrac{k_{\\text{\\tiny B}}T}{m\\gamma}$','c'};
  physics={'phsyics','P H Y S I C S','c'};
  octave={'octave','GNU Octave','c'};
  python={'python','Python','c'};
  java={'java','Java','c'};
  javaScript={'js','JavaScript','c'};
  bigData={'bigData','big\\\\ data','c'};
  proto={'proto','prototype','c'};
  devel={'devel','develop','c'};
  auto={'auto','automate','c'};
  vis={'vis','visualize','c'};
  linux={'linux','Linux','c'};
  bash={'bash','bash\\\\ $>$\\_','c'};
  latex={'latex','\\LaTeX','c'};

    diptesh={'diptesh','Diptesh','c'};

bicycle={'bicycle','$\\sum_i b_i $','c'};




  function addToWordlist(item)
    index = size(wordList)(2) + 1;
    wordList{index} = item;

  endfunction

  wordList = {};
%  addToWordlist(bicycle);
%  addToWordlist(diptesh)
%  addToWordlist(einstein);
%  addToWordlist(physics);
##addToWordlist(q);

##  addToWordlist(chormunity);
##  addToWordlist(love);


##  wordList{1}=name;
##  wordList{2}=einstein;
##  wordList{3}=physics;
##  wordList{4}=octave;
##  wordList{5}=python;
##  wordList{6}=java;
##  wordList{7}=javaScript;
##  wordList{8}=bigData;
##  wordList{9}=proto;
##  wordList{10}=devel;
##  wordList{11}=auto;
##  wordList{12}=vis;
##  wordList{13}=linux;
##  wordList{14}=bash;
##  wordList{15}=latex;

##  wordList{1}=bash;
##  wordList{2}=latex;

  for i=1:size(wordList)(2)
    genPic(wordList{i}{1},wordList{i}{2},wordList{i}{3},compiler);

  endfor

  y = "pics from words have been generated";
end
