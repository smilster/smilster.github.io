



const codingProgressData = [
    {
        id: 'octave',
        label: 'GNU Octave | MATLAB',
        progress: 92,
        code: `> science = max((prototyping + simulation) .* analysis); `,
        // code: `> (scientific' * analysis) + prototyping .* simulation`,
        text: `
     
        <b>Octave</b> is my favorite tool for tackling Physics and Math problems, particularly for the statistical analysis of large simulation datasets. I love its Math-like syntax and the high efficiency it offers in linear algebra and elementwise operations. Whenever possible, I squeeze the problem into matrix notation, and Octave needs only a few lines to solve the task. Octave is perfect for prototyping and model development, and even suits my needs for coarse-grained simulation on the production scale. No external packages. Pure Math. 
        
        `
    },
    {
        id: 'linux',
        label: 'Linux | Bash',
        progress: 80,
        code: `$ grep -i big *.data | awk '{print $2}' > relevant.txt`,
        text: `<b>Linux</b> &mdash; open-source, command line access and everything is a file. I love the unrestricted access to anything and I feel most comfortable with <i>Arch</i>, <i>Ubuntu</i> and <i>Alpine</i>, but in the end, it doesn't make a huge difference as long as I have a terminal and a documentation about the commands. <br><br>
        
        As an <i>in-silico</i> Physicist, I had to handle terrabytes of trajectories. The by far most efficient way with minimal memory footprint to extract the necessary quantities
        was the use of the Linux-native data streams and tools like <code>grep</code>, <code>awk</code> and <code>sed</code>, for instance. So <b>BASH</b> scripts belong to my daily routine for controlling software behavior and automating the production workflow.  
        `

    }, {
        id: 'lammps',
        label: 'LAMMPS',
        progress: 65,
        code: 'fix thermostat all langevin 1 1 1 46234<br>fix integrator all nve<br>timestep 0.001<br> run ${steps}',
        text: `<b>LAMMPS</b> is not a programming language, it is an extremely useful scripting language for molecular dynamics on the large scale. Mastering LAMMPS requires a thorough knowledge about particle simulations, their analysis and the underlying routines. LAMMPS simulations are the core of my scientific work (LINK to publications) and wre used for HPC benchmarks with V100-GPUs. See the bwHPC benchmark projects
            <a class="d-block text-light" href="https://www.bwhpc.de/374.php" rel="external">Running LAMMPS on Nvidia V100 on
                NEMO (tt-lammps-v100)</a>
            <a class="d-block text-light" href="https://www.bwhpc.de/388.php" rel="external">Multi-GPU-Support for LAMMPS on
                NEMO ( tt-lammps-multi-gpu)</a>
        
        `

    },
    {
        id: 'java',
        label: 'Java',
        progress: 50,
        code: `@Override<br>
            public Future shape(Fun anything) {<br>&#160; &#160;   return new Future(anything.goes());<br>}`,
        text: ` 
        <b>Java</b>'s strong focus on object-oriented programming, clean code, and its overall philosophy really hooked me when I took a Java developer course this summer. 
        After just a weeks or two, I felt very much at home, and I enjoy Java's great versatility and how smoothly it interacts with the operating system. Finally, I was equipped with a language to realize a project that I had always imagined:<br>
        <br> <i>The Stochastic Music Companion<img>.
        `

    },
    {
        id: 'js',
        label: 'JavasScript | HTML | CSS',
        progress: 42,
        code: 'function updateFrame(timestamp){<br>&#160; &#160; simulate();<br> &#160; &#160; draw();&#160;&#160;<br> &#160; &#160; requestAnimationFrame(updateFrame);<br>}',
        text: `<b>JavaScript</b>, <b>HTML</b> and <b>CSS</b> always go together in my projects as they conveniently combine to create customized web sites with unique features. The <a class="text-light" href="#page-top">animation</a> at the top of this page is a live Langevin simulation, written in JavaScript, passing the data to a webGL canvas. You may inspect the source code on GitHub:<br><br>
        <a class="text-light" href="https://www.github.com/smilster/smilster.github.io">www.github.com/smilster/smilster.github.io</a><br><br>
        
        The present websites obviously uses HTML and CSS. In fact, it employs the Bootstrap framework, but I'm not always happy the way it looks or behaves. So I dive into the code, tweak and add some JavaScript and CSS.<br><br>
        
        In the past JavaScript was handy in teaching colleagues and students about stochastic integrators. As you might know, the integrator will determine the convergence of your simulations, and actually, some algorithms are unable to reproduce the correct thermodynamic ensemble. This is important to know as it will impact on your physical accuracy. Here you can learn how different stochastic intregrators perform in various scenarios:<br><br>
        
        Link to Project
        `

    },
    {
        id: 'python',
        label: 'Python',
        progress: 35,
        code: '>>><br> from picamera2 import Picamera2<br>turtleCam = Picamera2()<br>while True: <br> &#160; &#160;tonsOfPictures = turtleCam.captureArray() ',
        text: `<b>Python</b> is great, and its vast range in packages and online resources can float any boat. This is the preferred language for most of my Physics colleagues. Instead of writing code from scratch, usually someone else has done it already. And thanks to its readability, it is a very handy tool for non-native Python users like me. For instance, the (LINK) MDAnalysis package saved me some tough hours in my early PhD years.  <br><br>

        Beyond that, I used Python for 's <i>TensorFlow</i> and <i>Keras</i> APIs to benchmark the performance of typical deep learning tasks on V100-GPUs (see also other GPU benchmarks LINK), and it smoothly handles the camera in my <i>Smart Turtle</i>(LINK) Raspberry Pi project.`

    }
];

function createElement(type) {
    if (!type) {
        return document.createElement('div');
    }
    return document.createElement(type);
}

function createProjectButton(data) {


    const progressDiv = createElement('button');
    progressDiv.className = 'myProgress p-0 border-0 m-2';

    const progressBarDiv = createElement();
    progressBarDiv.className = 'myProgressBar';
    progressBarDiv.style = 'width: ' + data.progress + '%;';

    const progressLabelDiv = createElement();
    progressLabelDiv.className = 'myProgressLabel text-dark';
    progressLabelDiv.innerHTML = data.label;

    progressDiv.appendChild(progressBarDiv);
    progressDiv.appendChild(progressLabelDiv);

    return progressDiv;


}

function createAccordionButton(targetId, item) {
    const buttonDiv = createElement('button')
    buttonDiv.id = item.id + 'Coding';
    buttonDiv.classList.add('accordion-button')
    buttonDiv.classList.add('collapsed');
    buttonDiv.setAttribute('type', 'button');
    buttonDiv.setAttribute('data-bs-toggle', 'collapse');
    buttonDiv.setAttribute('data-bs-target', '#' + targetId);

    buttonDiv.appendChild(createProjectButton(item));

    return buttonDiv;
}

function createAccordionContent(targetId, parentId, bodyDiv) {
    const contentDiv = createElement();
    contentDiv.className = 'accordion-collapse collapse'
    contentDiv.id = targetId;
    contentDiv.setAttribute('data-bs-parent', '#' + parentId);
    contentDiv.appendChild(bodyDiv);
    return contentDiv;

}

function createAccordionBody(item) {
    const codeWrap = createElement();
    codeWrap.className = 'my-3 ';
    // codeWrap.style = 'width: max-content;'
    const codeDiv = createElement();
    codeDiv.className = 'ms-2 me-2';
    codeDiv.style = "font-family: Lekton Bold;";

    codeDiv.innerHTML += item.code;

    codeWrap.innerHTML = '<hr>';
    codeWrap.appendChild(codeDiv);
    codeWrap.innerHTML += '<hr>';

    const textDiv = createElement()
    textDiv.className = 'text-nice';
    textDiv.innerHTML = item.text;

    const bodyDiv = createElement();
    bodyDiv.className = 'accordion-body';

    bodyDiv.appendChild(codeWrap);
    bodyDiv.appendChild(textDiv);
    bodyDiv.innerHTML += '<br>';
    return bodyDiv;
}







function createAccordionItem(parentId, item) {

    const targetId = item.id + 'Target';


    const accordionItemDiv = createElement();
    accordionItemDiv.className = 'accordion-item';

    const buttonDiv = createAccordionButton(targetId, item);
    const body = createAccordionBody(item);

    const contentDiv = createAccordionContent(targetId, parentId, body);

    accordionItemDiv.appendChild(buttonDiv);
    accordionItemDiv.appendChild(contentDiv);

    accordionItemDiv.setAttribute('onclick', `checkDivVisibility("${buttonDiv.id}")`);

    return accordionItemDiv;

}




const codingAccordingDiv = document.getElementById('codingAccordion');


codingProgressData.forEach(item => {


});






