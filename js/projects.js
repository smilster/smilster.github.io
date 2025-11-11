const projects = [

    {
        id: 'webPage',
        cardImage: 'webPage.jpg',
        modalImage: 'webPage.jpg',
        category: 'Nonlinear Dynamics',
        name: 'WebGL Animation',
        demoLink: '#page-top',
        githubLink: 'https://github.com/smilster/smilster.github.io/tree/main/sim',
        hashTags: [
            links.js,
            links.webGl,
            links.gnuOctave,
            links.laTeX,
        ],
        modalDescription: `<p>The <a href="${links.webGl.href}" rel="external">${links.webGl.label}</a> animation above is a Langevin simulation performed by <a href="${links.js.href}" rel="external">${links.js.label}</a>. The initial symmetric structure represents a complex velocity field with multiple limit cycles. Subsequently, the particles alternate between phases of free diffusion and targeted minimization, with the targets changing each loop.</p>

<p>
The targets are stored in arrays and generated from images via Monte Carlo trials. This task is executed by an <a href="${links.gnuOctave.href}" rel="external">${links.gnuOctave.label}</a> script, which also supports the insertion of <a href="${links.laTeX.href}" rel="external">${links.laTeX.label}</a> syntax to create images containing formatted text or equations.
</p>


        `
    },
    {
        id: 'schiggi',
        cardImage: 'schiggi_thumb.jpg',
        modalImage: 'https://smilster.github.io/schiggi/sensor.svg',
        modalVideo: 'https://smilster.github.io/schiggi/schiggi.mp4',
        category: 'Raspberry Pi',
        name: 'Smart Turtle',
        demoLink: '',
        githubLink: 'https://github.com/smilster/schiggi',
        hashTags: [
            links.raspberryPi,
            links.python,
            // links.picamera2,
            // links.numpy,
            links.gnuOctave,
            links.bash,
            links.gitHubActions,
            // links.docker,
            links.ffmpeg

        ],
        modalDescription: `<p> <b>Schiggi Wara</b> (&#643;i&#720;g&#618; 'va&#720;&#x0281;a&#720;) was born in 2010 and has been photographed more than 500K times since 2019. The curiosity about what a turtle does when nobody is watching turned into a fully automated <a href="${links.raspberryPi.href}">Raspberry</a> server, collecting temperatures, humidity and tons of pictures.  
    </p>
    <p>The camera is controlled by the <a href="${links.picamera2.href}" rel="external">picamera2</a> package, which sets up a local network stream buffering the last two frames in <a href="${links.numpy.href}" rel="external">${links.numpy.label}</a> arrays. A rather simple yet fast algorhithm compares pixel changes and stores frames as JPEGs if some thresholds are met. In parallel, another script collects data from the DHT22 and several DS18B20 sensors, as well as from the <a href="https://weather.uni-freiburg.de" rel="external">weather station of the University of Freiburg</a> for some outside reference. The data is periodically read by an <a href="${links.gnuOctave.href}" rel="external">${links.gnuOctave.label}</a> script visualizing the past two days in the SVG plot above.</p>
    <p>
    Every evening, the Raspberry updates the sensor plot and the latest 1K pictures in a <a href="https://github.com/smilster/schiggi" rel="external">repository</a> that employs <a href="${links.gitHubActions.href}" rel="external">${links.gitHubActions.label}</a> to generate the MPEG above, and a markdown file displaying these <a href="${links.schiggiImages.href}" rel="external">images</a>.
</p>

        `
    },
    {
        id: 'hpc',
        cardImage: 'hpc_thumb.jpg',
        modalImage: 'hpc_thumb.jpg',
        category: 'High Performance Computing',
        name: 'GPU Support and Benchmarking',
        demoLink: '',
        githubLink: '',
        hashTags: [
            links.lammps,
            links.openMPI,
            links.nemo,
            links.V100,
        ],
        modalDescription: `<p>State-of-the-art science relies on robust computing infrastructure. <a href="https://www.bwhpc.de/tiger_team_projects.php" rel="external">Tiger Teams</a> are the close collaborations between scientists and Baden-Württemberg's HPC specialists to develop stable, ready-to-use high-performance modules and provide user support for large-scale clusters such as <a href="${links.nemo.href}" rel="external">NEMO</a>. </p>
<p>
I contributed to refining compilation workflows to maximize the parallel computing performance of <a href="${links.lammps.href}" rel="external">${links.lammps.label}</a> simulations on <a href="${links.V100.href}" rel="external">NVIDIA’s V100 GPUs</a>.
In summary, we successfully implemented CUDA-aware <a href="${links.openMPI.href}" rel="external">MPI</a> modules and documented the most suitable compilation and simulation schemes, enabling multi-GPU parallization with a single GPU replacing the workload of up to 200 CPU cores.
</p>
<p>
See <a href="${links.ttLammpsV100.href}" rel="external">${links.ttLammpsV100.label}</a> and <a href="${links.ttLammpsMultiGpu.href}" rel="external">${links.ttLammpsMultiGpu.label}</a> for more information.
</p>




        `
    },
    {
        id: 'choirJs',
        cardImage: 'choir.jpg',
        modalImage: 'choir.jpg',
        category: 'Algorithmic Music Composition',
        name: 'Choir.js',
        demoLink: 'https://smilster.github.io/Choir.js',
        githubLink: 'https://github.com/smilster/Choir.js',
        modalVideo: [
            'https://smilster.github.io/Choir.js/videos/tutorial.mp4',
            'https://smilster.github.io/Choir.js/videos/random.mp4',
            'https://smilster.github.io/Choir.js/videos/chord-progression.mp4'
        ],

        hashTags: [
            links.js,
            links.toneJs,
            links.vexFlow,
            links.bootstrap
        ],
        modalDescription: `<p>
Choir.js is a music composition assistant designed for inspiration and education. The core feature is <a href="https://github.com/smilster/Choir.js?tab=readme-ov-file#theory---note-generation" rel="external">automatic note generation</a> , e.g., useful for adding a voice to a short musical passage. Choir.js visualizes the notes in simple musical scores and plays them back. 
</p>
<p>
Choir.js itself does not understand chord progression or harmony. Instead, a good melody already inherently encodes them to some extent, though not in a unique way. By defining scales and vertical interval-relations between voices (and the addition of randomness), Choir.js can produce countless harmonizing (or intentionally disharmonizing) accompaniments.
</p>
<p>
<h5>Videos</h5>
<ul>
<li> <a href="https://smilster.github.io/Choir.js/videos/tutorial.mp4" rel="external">Tutorial </a>
</li>
<li> <a href="https://smilster.github.io/Choir.js/videos/random.mp4" rel="external">Random Composition </a>
</li>
<li> <a href="https://smilster.github.io/Choir.js/videos/chord-progression.mp4" rel="external">Chord Progression </a>
</li>
</ul>
</p>
<p>
<h5>Features</h5>
<ul>
<li>Manual note editing (text input with simple syntax)</li>
<li>Random rhythm generation</li>
<li>Automated voiced generation</li>
<li>Scale and key visualization</li>
<li>Voice range setting</li>
<li>Audio playback with different instruments</li>
<li>Multi-channel mixer (fade, pan, solo, mute)</li>
<li>Tooltips</li>
<li>Tutorial</li>
</ul>
</p>


        `
    },
    {
        id: 'choirJava',
        cardImage: 'musicCompanion.jpg',
        modalImage: 'musicCompanion.jpg',
        category: 'Real-Time MIDI Processing',
        name: 'Stochastic Music Companion',
        demoLink: '',
        githubLink: '',
        modalVideo: 'img/projects/trueColors.mp4',
        hashTags: [
            links.java,
            links.javaxMidi,
            links.midi,
            links.jack,
            links.qsynth,
            links.vmpk
        ],
        modalDescription: `<p> The <b>Stochastic Music Companion</b> is one of my latest projects, and it is in a very early state. It's written <a href="${links.java.href}" rel="external">${links.java.label}</a> and employs the standard Sound API and the <a href="${links.javaxMidi.href}" rel="external">${links.javaxMidi.label}</a> package to process <a href="${links.midi.href}" rel="external">${links.midi.label}</a> data. In summary, it listens to MIDI inputs, e.g., from a MIDI keyboard, produces accompanying voices based on the chosen scale and inter-voice relations, and sends them to virtual MIDI ports, which allows real-time playback by arbitrary midi devices such as virtual instruments. </p>
<p>
In the video, I play some melody with on the keyboard and the <b>Stochastic Music Companion</b> creates additional pitches, which are played back by <a href="${links.qsynth.href}" rel="external">${links.qsynth.label}</a> and visualized by <a href="${links.vmpk.href}" rel="external">${links.vmpk.label}</a>. The musical result is far from perfect, but much better than my own piano skills.
</p>
        `
    },
    {
        id: 'integrators',
        cardImage: 'integrators.jpg',
        modalImage: 'integrators.jpg',
        category: 'Interactive Simulation',
        name: 'Stochastic Integrators',
        demoLink: 'https://smilster.github.io/stochastic-integrators',
        githubLink: 'https://github.com/smilster/stochastic-integrators',
        hashTags: [
            links.js,
            links.plotly,
            links.d3,
        ],
        modalDescription: `
<p>
This tool is an interactive particle simulator designed to explore how different integration schemes affect a stochastic ensemble under various conditions. 
</p>

<p>
The choice of integration scheme in particle simulations determines both accuracy and convergence. Some algorithms can even produce unphysical results if applied incorrectly. In stochastic systems with position- or velocity-dependent friction or diffusion, selecting the appropriate integrator becomes essential to ensure that the simulation reproduces the correct <a href="${links.langevin.href}" rel="external">interpretation</a>.</p>
<p>

</p>

     
        `
    }
];




