/// <reference types="Cypress" />

context('About', () => {
    beforeEach(() => {
        cy.visit('/work-landing')
    })

    it('Check Hero',() =>{
        cy.get('body > main > section > article.container-fluid.section-header').as('hero')

        //HEADER
        cy.get('@hero').children('div').eq(0).children('h2').should('have.text','work').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@hero').children('div').eq(0).children('h2').should('have.css','color').and('eq','rgb(0, 0, 0)')
        // cy.get('@hero').children('div').eq(0).children('h1').should('have.text','building better').and('have.css','text-transform').and('eq','lowercase')
        cy.get('@hero').children('div').eq(0).children('h1').should('have.css','color').and('eq','rgb(16, 198, 78)')

        // MENU
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1)').should('be.visible')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1)').should('contain.text', 'about')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2)').should('be.visible')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2)').should('contain.text', 'work')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3)').should('be.visible')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3)').should('contain.text', 'blog')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(4)').should('be.visible')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(4)').should('contain.text', 'jobs')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(5)').should('be.visible')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(5)').should('contain.text', 'contact')
    })

    it('Check Menu Navigation', () =>{
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1) > a').click()
        cy.url().should('include','about')
        cy.go('back')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2) > a').click()
        cy.url().should('include', 'work')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3) > a').click()
        cy.url().should('include', 'blog')
        cy.go('back')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(4) > a').click()
        cy.url().should('include', 'jobs')
        cy.go('back')
        cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(5) > a').click()
        cy.url().should('include', 'contact')
        cy.go('back')   
    })

    it('Check Main Content Video Section', () =>{
        cy.get('body > main > section > div:nth-child(3) > div > a').as('videoContainer').scrollIntoView()

        cy.get('@videoContainer').should('have.class','video-modal-cta')
        cy.get('@videoContainer').children('img').should('be.visible')
        cy.get('@videoContainer').children('div').children('h2').should('have.text','Work').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@videoContainer').children('div').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
        cy.get('@videoContainer').children('div').children('h1').should('have.text','play the reel').and('have.css','text-transform').and('eq','lowercase')
        cy.get('@videoContainer').children('div').children('h1').should('have.css','color').and('eq','rgb(255, 255, 255)')
    })

    it('Check Expertise Text Section', () => {
        cy.get('body > main > section > article.z-main-content-full.z-main-content-full.z-article.case-studies-heading > div').as('expertise').scrollIntoView()

        cy.get('@expertise').children('div.z-article-heading').children('h2').should('have.text', 'EXPERTISE').and('have.css', 'text-transform').and('eq', 'uppercase')
        cy.get('@expertise').children('div.z-article-heading').children('h2').should('have.css', 'color').and('eq', 'rgb(16, 198, 78)')
        cy.get('@expertise').children('div.z-article-heading').children('h1').should('have.css', 'text-transform').and('eq', 'lowercase')
        cy.get('@expertise').children('div.z-article-heading').children('h1').should('have.css', 'color').and('eq', 'rgb(0, 0, 0)')

        cy.get('@expertise').children('div.z-body-copy').children('p').should('have.length', 1)
    })

    it('Check Expertise Images Section', () => {
        cy.get('body > main > section > div.row.z-case-studies-container').as('expertise').scrollIntoView()

        cy.get('@expertise').children('div').should('have.length', 2)
        cy.get('@expertise').children('div').each(($div, i, $divs) => {
            cy.get($div).as('case').children('div').should('have.length',2)
            cy.get('@case').children('div').eq(0).should('have.class','case-study-item-img')
            cy.get('@case').children('div').eq(1).as('caseText').should('have.class','case-study-item-txt')
            cy.get('@caseText').children('h2').should('have.class','z-small-title-caps').and('have.css','text-transform').and('eq','uppercase')
            cy.get('@caseText').children('h1').should('have.class','z-article-title').and('have.css','text-transform').and('eq','lowercase')
        })
    })

    it('Check Projects Section', () => {
        cy.get('body > main > section > div.z-portfolio-gallery.z-article.container-fluid').as('portfolio').scrollIntoView()

        cy.get('@portfolio').children('div.z-title-box').children('h2').should('have.text','projects').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@portfolio').children('div.z-title-box').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
        cy.get('@portfolio').children('div.z-title-box').children('h1').should('have.css','text-transform').and('eq','lowercase')
        cy.get('@portfolio').children('div.z-title-box').children('h1').should('have.css','color').and('eq','rgb(0, 0, 0)')

        cy.get('@portfolio').children('div.z-text-box').children('p').should('have.length',1)

        cy.get('@portfolio').children('div.z-tabs').children('div').children('ul').scrollIntoView().children('li').as('projects')
        cy.get('@projects').should('have.length',6)
        cy.get('@projects').each(($li,i,$lis)=>{
            cy.get($li).children('a').children('div:nth-child(1)').should('have.attr','style').and('contain','background-image:')
            cy.get($li).children('a').children('div:nth-child(2)').should('have.attr','style').and('contain','background-image:')
            cy.get($li).children('a').children('strong').should('have.css','color').and('eq','rgb(38, 196, 118)')
            cy.get($li).children('a').children('strong').should('have.css','text-transform').and('eq','uppercase')
            cy.get($li).children('a').children('span').should('have.css','color').and('eq','rgb(0, 0, 0)')
            cy.get($li).children('a').children('span').should('have.css','text-transform').and('eq','lowercase')
        })
    })

    it('Check Clients Section', () => {
        cy.get('body > main > section > article.z-partners.z-article.container-fluid').as('clientsSection').scrollIntoView()

        cy.get('@clientsSection').children('div.z-article-heading').children('h2').should('have.text','Clients').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@clientsSection').children('div.z-article-heading').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
        cy.get('@clientsSection').children('div.z-article-heading').children('h1').should('have.css','text-transform').and('eq','lowercase')
        cy.get('@clientsSection').children('div.z-body-copy').children('p').should('have.length',1)

        cy.get('@clientsSection').children('div.z-partners-wrapper').scrollIntoView().children('ul').children('li').as('partners')
        cy.get('@partners').should('have.length',17)

        cy.get('@partners').each(($li,i,$lis)=>{
            // TODO: check tooltip behavior
            cy.get($li).children('span').should('have.class','partner-link')
            cy.get($li).children('span').children('a').should('have.attr','style').and('contain','background-image:')
        })
    })

    it('Check Contact Section', () =>{
        cy.get('body > main > section > article.z-cta-block.text-center.z-article.container-fluid > div > div').as('contact').scrollIntoView()

        cy.get('@contact').children('p').children('a').as('cta')
        cy.get('@cta').should('have.text','contact us')
        cy.get('@cta').should('have.attr','href').and('contain','contact')
    })

    it('Check Footer', () =>{
        cy.get('body > footer > div > div').as('footer').scrollIntoView()

        cy.get('@footer').children('div').should('contain.text','new york')
        cy.get('@footer').children('div').should('contain.text','bogotá')
        cy.get('@footer').children('div').should('contain.text','los angeles')
        cy.get('@footer').children('div').should('contain.text','wilton')

        cy.get('@footer').children('div').eq(1).should('contain.text','subscribe')
    })
})