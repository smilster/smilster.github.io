class CV {
    constructor(cvContentDivId) {
        this.cvContentDiv = document.getElementById(cvContentDivId);
        this.row = null;
        this.col = null;

    }


    static create(cvContentDivId) {

        const cv = new CV(cvContentDivId);
        cv.cvContentDiv.className = 'container-auto h6 pb-5 m-0';
        cv.cvContentDiv.fontFamily = 'Clear Sans';


        cv.createRow();
        cv.createCol();

        ////////////////////////
        // academic background
        cv.createHeading('Academic Background')


        // Uni Freiburg
        cv.createAffiliation('Albert Ludwig University of Freiburg','ALU.png')

        cv.createCvEntry('04/2022','12/2024','Postdoctoral Research ','Reducing complexity of' +
            ' non&shy;equi&shylib&shyrium systems','Physics')
        cv.createCvEntry('01/2019','03/2022','Doctoral Studies','Structure-property relations in' +
            ' polymeric membranes for controlled solute transport','Physics &mdash; Phase II')


        //HZB
        cv.createAffiliation('Helmholtz-Zentrum Berlin','HZB.jpg')
        cv.createCvEntry('10/2016','12/2018','Doctoral Studies','Investigation of the structure and dynamics of' +
            ' thermosensitive ' +
            'hydrogels using atomistic simulations','Physics &mdash; Phase I')


        //HUB
        cv.createAffiliation('Humboldt University of Berlin','HUcrop.svg',70)
        cv.createCvEntry('10/2012','04/2015','Master of Science','Active Brownian particles with' +
            ' repulsive interactions','Physics')
        cv.createCvEntry('10/2008','10/2012','Bachelor of Science','Dynamics in small neural networks','Physics')


        cv.createCol();

        ////////////////////////
        // social
        cv.createHeading('Social Engagement')


        //Johanniter
        cv.createAffiliation('Die Johanniter,  Königs Wusterhausen','JUH.svg',56)
        cv.createCvEntry('07/2015','12/2017','Volunteer Service',`
        Patient transport and first-aid workshops for children and adolescents
`,'Bundesfreiwilligendienst and free-time volunteer work')

        cv.createAffiliation('Rehabiliationszentrum Berlin-Ost','RBO.png',56)
        cv.createCvEntry('09/2007','05/2008','Community Service','Care and support for people with disabilities','Zivildienst')


        ////////////////////////
        // school
        cv.createHeading('School')
        // const spacer = document.createElement('div')
        // spacer.className = 'mt-4';

        // cv.col.appendChild(spacer);
        cv.createCvEntry('08/1999','06/2007','Abitur','','Georg-Forster-Gymnasium, Berlin')
        cv.createCvEntry('08/2003','07/2004','High School Exchange','','Livingstone High School, Cape Town')



    }

    createRow(){
        const row = document.createElement('div');
        row.className = 'row gx-5 px-0 mx-0';

        this.row = row;
        this.cvContentDiv.appendChild(row);
    }
    createCol(){
        const col = document.createElement('div');
        col.className = 'col-sm-10 col-md-8 col-lg-5 col-xlg-5 mx-auto my-auto';
        col.style.maxWidth = "500px";

        this.col = col;
        this.row.appendChild(col);
    }



    createAffiliation(name,logo = null,widthInPixels = 60) {
        const affiliation = document.createElement('div')
        affiliation.className = 'd-flex align-items-center justify-content-center';
        affiliation.style.marginTop = "35px";


        const affiliationLabel = document.createElement('div')
        affiliationLabel.className = ' fw-bold w-100 h5 mb-0';
        affiliationLabel.textContent = name;



        const wrapperWidth = 70;
        const affiliationLogoWrapper = document.createElement('div')
        affiliationLogoWrapper.className = 'ms-auto';
        affiliationLogoWrapper.style.position = 'relative';
        affiliationLogoWrapper.style.width = wrapperWidth + 'px';

        const positionLeft = wrapperWidth / 2 - widthInPixels/2;
        const affiliationLogo = document.createElement('img');
        affiliationLogo.src = 'img/icons/' + logo;
        affiliationLogo.style.width = widthInPixels + 'px';
        affiliationLogo.style.position = 'absolute';
        affiliationLogo.style.left = positionLeft + 'px';
        affiliationLogo.style.transform = 'translateY(-50%)';

        affiliationLogoWrapper.appendChild(affiliationLogo);

        affiliation.append(affiliationLabel,affiliationLogoWrapper)


        this.col.append(affiliation);
    }

    createCvEntry (fromDate,toDate,caption,details='',subject = '') {


        const entry = document.createElement('div')
        entry.className = 'mt-3';


        const dateLabel = document.createElement('span')
        dateLabel.className = 'pe-2 mt-2';
        dateLabel.innerHTML = fromDate + ' &mdash; ' + toDate;


        const textCol = document.createElement('div')
        textCol.className = 'text-start'
        // textCol.style.maxWidth = '400px';


        const text = document.createElement('div')
        text.className = 'ps-3 mt-2';
        text.style.cssText = 'border-left: 3px var(--bs-primary) solid;';

        const textCaption = document.createElement('div');
        textCaption.className = 'fw-bold'
        textCaption.innerHTML = caption;






        const  textDetails = document.createElement('div');
        textDetails.className = 'h6 my-1 text-nice'
        textDetails.style.color = 'var(--bs-gray-600)'
        textDetails.innerHTML = details;


        const textSubject = document.createElement('div');
        if (subject !== ''){
            textSubject.className = 'h6 my-1  text-primary'
            textSubject.innerHTML =  subject
        }



        text.append(textCaption,textDetails,textSubject);
        textCol.append(text);
        entry.append(dateLabel,textCol);

        this.col.append(entry);

    }

    createHeading(text){
        const heading = document.createElement('div')
        heading.className = 'h4 text-info fw-bold pt-5';
        // heading.style.marginTop = '120px';
        heading.innerHTML = text;
        this.col.append(heading)
    }





}