class Card {

    static list = new Map();

    static create(data,name) {
        const card = new Card(data);
        card.body.style.backgroundImage = 'url(/img/' + name + '/' + data.cardImage + ')';
        this.list.set(data.id, card.card);
        return card.div;
    }



    constructor(data){
        this.div =  document.createElement('div');
        this.div.classList.add('col-10','col-sm-8','col-md','mx-auto','my-5');


        this.card = document.createElement('div');


        this.card.className = ' card m-0 px-0 portfolio-card';


        this.card.href = '#';
        this.card.setAttribute('data-bs-toggle', 'modal');
        this.card.setAttribute('data-bs-target', `#${data.id}`);
        this.card.style.cssText = 'hover: '


        this.body = document.createElement('div');
        this.body.className = 'card-body portfolio-card-body';




        this.footer = document.createElement('div');
        this.footer.className = 'card-footer text-center small portfolio-card-footer';

        this.category = document.createElement('div');
        this.category.className = ' text-center text-muted portfolio-card-category';
        this.category.textContent = data.category; // Category as Footer

        this.name = document.createElement('div');
        this.name.className = ' text-center text-primary fw-bold portfolio-card-name';
        this.name.textContent = data.name; // Project Name as Header


        this.footer.append(this.category,this.name)




        this.card.appendChild(this.body);
        this.card.appendChild(this.footer);

        this.div.appendChild(this.card);



    }




}
