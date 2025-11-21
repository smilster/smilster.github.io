class CodingAccordion {


    static codingProgressData = [{
        id: 'octave', language: 'matlab', label: 'GNU Octave | MATLAB', progress: 92, text: `
        Pro&shy;to&shy;typing, model de&shy;vel&shy;op&shy;ment, statistical analysis and even coarse-grained simulations. <a href="${links.gnuOctave.href}" rel="external">Octave</a> is usually the backbone of my scientific work. See, e.g., <a href="javascript:void(0)" onclick="Card.list.get('NEQMembrane').click()">Steered Mole&shy;cu&shy;lar Dy&shy;nam&shy;ics</a> and <a href="javascript:void(0)" onclick="Card.list.get('EQmemory').click()">Gen&shy;er&shy;al&shy;ized Lan&shy;ge&shy;vin</a>.
       
        `
    }, {
        id: 'linux', language: 'bash', label: 'Linux | Bash', progress: 80, text: `
Open-source, unrestricted command-line access and everything is a file. I feel comfortable with many distributions, e.g., <a href="https://archlinux.org/" rel="external">Arch</a>, <a href="https://ubuntu.com/" rel="external">Ubuntu</a> and <a href="https://www.alpinelinux.org/" rel="external">Alpine</a>, and enjoy automating processes with <a href="${links.bash.href}" rel="external">${links.bash.label}</a> scripts. 
        `

    }, {
        id: 'lammps', language: 'lammps', label: 'LAMMPS', progress: 65, text: `<a href="${links.lammps.href}" rel="external">LAMMPS</a> requires a solid knowledge, yet provides an extremely performant scripting interface for particle simulations. I have used it in my scientific work, e.g.,  <a href="javascript:void(0)" onclick="Card.list.get('NEQMembrane').click()">Steered Mole&shy;cu&shy;lar Dy&shy;nam&shy;ics</a> and <a href="javascript:void(0);" onclick="Card.list.get('EQmemory').click()">Gen&shy;er&shy;al&shy;ized Lan&shy;ge&shy;vin</a>, as well as for benchmarking <a href="javascript:void(0);" onclick="Card.list.get('hpc').click()">HPC GPU per&shy;for&shy;mance</a>.
        
        
        `

    }, {
        id: 'js',
        language: 'javascript',
        label: 'JavasScript',
        progress: 50,
        text: `<a href="${links.js.href}" rel="external">${links.js.label}</a> is my favorite choice for interactive applets. E.g., for teaching with <a href="javascript:void(0);" onclick="Card.list.get('integrators').click()">In&shy;ter&shy;ac&shy;tive Sim&shy;u&shy;la&shy;tions</a>, for visualizations like the <a href="javascript:void(0);" onclick="Card.list.get('webPage').click()">WebGL An&shy;i&shy;ma&shy;tion</a> above, or for inspiration, see <a href="javascript:void(0);" onclick="Card.list.get('choirJS').click()">Choir.js</a>.
        
   
        `

    }, {
        id: 'java',
        language: 'java',
        label: 'Java',
        progress: 40,
        text: `Great versatility, cross-platform and smooth integration with the operating system.  <a href="${links.java.href}" rel="external">Java</a> has become my favorite tool for real-time <a href="${links.midi.href}" rel="external">MIDI</a> processing, e.g., to experiment with microtonal music or for my 
        <a href="javascript:void(0);" onclick="Card.list.get('choirJava').click()">Stochastic Music Companion</a>
        `

    }, {
        id: 'python',
        language: 'python',
        label: 'Python',
        progress: 35,
        text: `<a href="https://www.python.org/" rel="external">Python</a> is always handy due to its vast range in packages and online resources. I used its <a href="https://www.tensorflow.org/" rel="external">TensorFlow</a> and <a href="https://keras.io/" rel="external">Keras</a> APIs for deep-learning benchmarks on high performance GPUs, and it is the core language for my <a href="javascript:void(0);" onclick="Card.list.get('schiggi').click()">Smart Turtle</a>.`

    }];


    constructor(divId, items) {
        this.isShown = new Map();

        const progressAccordionDiv = document.getElementById(divId);


        items.forEach((item) => {
            const accordionItem = this.createAccordionItem(progressAccordionDiv.id, item);
            progressAccordionDiv.appendChild(accordionItem);

        })


    }

    static createCodingAccordion(divID) {
        new CodingAccordion(divID, this.codingProgressData);
    }

    // I N S T A N C  E   M E  T H O D S

    static checkDivVisibility(element) {
        const yShift = 70;


        setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top
            const navbarBottom = document.getElementById('mainNav').getBoundingClientRect().bottom;
            if (elementPosition < yShift && !element.classList.contains("collapsed")) {

                window.location.href = '#' + element.id;
                window.scrollBy(0, elementPosition - navbarBottom);
            }
        }, 400);

    }


    createAccordionItem(parentId, item) {

        const targetId = item.id + 'Target';


        const accordionItemDiv = this.createElement();
        accordionItemDiv.className = 'accordion-item';

        const buttonDiv = this.createAccordionButton(targetId, item);
        buttonDiv.appendChild(this.createProgress(item));

        const body = this.createAccordionBody(item);
        const contentDiv = this.createAccordionCollapse(targetId, parentId, body);

        accordionItemDiv.appendChild(buttonDiv);
        accordionItemDiv.appendChild(contentDiv);

        accordionItemDiv.onclick = function () {
            CodingAccordion.checkDivVisibility(buttonDiv)
        }


        return accordionItemDiv;

    }


    createAccordionButton(targetId, item) {
        const buttonDiv = this.createElement('button')
        buttonDiv.id = item.id + 'Coding';
        buttonDiv.className = 'accordion-button collapsed px-0';
        buttonDiv.setAttribute('type', 'button');
        buttonDiv.setAttribute('data-bs-toggle', 'collapse');
        buttonDiv.setAttribute('data-bs-target', '#' + targetId);


        return buttonDiv;
    }


    createProgress(item) {


        const progressDiv = this.createElement('button');
        progressDiv.className = 'myProgress p-0 border-0 ms-0 me-0';

        const progressBarDiv = this.createElement();
        progressBarDiv.className = 'myProgressBar border-0';
        progressBarDiv.style.cssText = 'width: ' + item.progress + '%;';

        const progressLabelDiv = this.createElement();
        progressLabelDiv.className = 'myProgressLabel text-dark';
        progressLabelDiv.innerHTML = item.label;


        progressDiv.appendChild(progressBarDiv);
        progressDiv.appendChild(progressLabelDiv);

        return progressDiv;


    }


    createAccordionBody(item) {
        const codeWrap = this.createElement('pre');
        codeWrap.className = 'my-3 mx-0 ';

        const codeDiv = this.createElement('code');
        codeDiv.className = ' mx-0 my-0 px-3 small ' + 'language-' + item.language;
        codeDiv.style.maxHeight = 100 + 'px';
        codeDiv.innerHTML += item.code;

        codeWrap.appendChild(codeDiv);

        const textDiv = this.createElement()
        textDiv.className = 'text-nice';
        textDiv.innerHTML = item.text;

        const bodyDiv = this.createElement();
        bodyDiv.className = 'accordion-body card bg-white mb-2';

        bodyDiv.appendChild(textDiv);
        return bodyDiv;
    }

    createAccordionCollapse(targetId, parentId, bodyDiv) {
        const collapseDiv = this.createElement();
        collapseDiv.className = 'accordion-collapse collapse'
        collapseDiv.id = targetId;
        collapseDiv.setAttribute('data-bs-parent', '#' + parentId);
        collapseDiv.appendChild(bodyDiv);

        this.isShown.set(targetId, false);


        return collapseDiv;

    }


    createElement(type) {
        if (!type) {
            return document.createElement('div');
        }
        return document.createElement(type);
    }


}