class Menu{
    constructor(){
    }
    
    goToHome(){
        cy.get('#z-logo').click();
        const home = new HomePage();
        return home;
    }

    goToAbout(){
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1) > a').click();
        const about = new AboutPage();
        return about;
    }

    goToWork(){
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2) > a').click();
        const work = new WorkPage();
        return work;
    }

    goToBlog(){
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3) > a').click();
        const blog = new BlogPage();
        return blog;
    }

    goToJobs(){
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1) > a').click();
        const jobs = new JobsPage();
        return jobs;
    }

    goToContact(){
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1) > a').click();
        const contact = new ContactPage();
        return contact;
    }

}