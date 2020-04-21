/// <reference types="Cypress" />

context('About', () => {
    beforeEach(() => {
        cy.visit('/about')
    })

    // it('Check Hero',() =>{
    //     cy.get('body > main > section > article.container-fluid.section-header').as('hero')

    //     //HEADER
    //     cy.get('@hero').children('div').eq(0).children('h2').should('have.text','about').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@hero').children('div').eq(0).children('h2').should('have.css','color').and('eq','rgb(0, 0, 0)')
    //     cy.get('@hero').children('div').eq(0).children('h1').should('have.text','building better').and('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@hero').children('div').eq(0).children('h1').should('have.css','color').and('eq','rgb(16, 198, 78)')

    //     // MENU
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1)').should('be.visible')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1)').should('contain.text', 'about')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2)').should('be.visible')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2)').should('contain.text', 'work')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3)').should('be.visible')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3)').should('contain.text', 'blog')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(4)').should('be.visible')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(4)').should('contain.text', 'jobs')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(5)').should('be.visible')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(5)').should('contain.text', 'contact')
    // })

    // it('Check Menu Navigation', () =>{
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(1) > a').click()
    //     cy.url().should('include','about')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(2) > a').click()
    //     cy.url().should('include', 'work')
    //     cy.go('back')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(3) > a').click()
    //     cy.url().should('include', 'blog')
    //     cy.go('back')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(4) > a').click()
    //     cy.url().should('include', 'jobs')
    //     cy.go('back')
    //     cy.get('body > header > div > nav > div.z-menu--opened > ul > li:nth-child(5) > a').click()
    //     cy.url().should('include', 'contact')
    //     cy.go('back')   
    // })

    // it('Check Main Content Image Section', () =>{
    //     cy.get('body > main > section > article.z-main-content-full.z-article.z-article-no-margins > div.margin-right').as('imageContainer').scrollIntoView()

    //     cy.get('@imageContainer').children('img').should('be.visible').and('have.attr','alt').and('eq','About Us')
    // })

    // it('Check Our DNA Section', () =>{
    //     cy.get('body > main > section > article:nth-child(3) > div').as('dna')

    //     cy.get('@dna').children('div.z-title-box').children('h2').should('have.text','Our DNA').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@dna').children('div.z-title-box').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
    //     cy.get('@dna').children('div.z-title-box').children('h1').should('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@dna').children('div.z-title-box').children('h1').should('have.css','color').and('eq','rgb(0, 0, 0)')

    //     cy.get('@dna').children('div.z-text-box').children('p').should('have.length',2)

    //     cy.get('@dna').children('div.z-image-box').children('img').should('be.visible')
    // })

    // it('Check Capabilities Section', () => {
    //     cy.get('body > main > section > article.z-content-two-cols.z-article.container-fluid.z-capabilities-article > div').as('capabilities').scrollIntoView()

    //     cy.get('@capabilities').children('div.z-title-box').children('h2').should('have.text','Capabilities').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@capabilities').children('div.z-title-box').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
    //     cy.get('@capabilities').children('div.z-title-box').children('h1').should('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@capabilities').children('div.z-title-box').children('h1').should('have.css','color').and('eq','rgb(0, 0, 0)')

    //     cy.get('@capabilities').children('div.z-text-box').children('p').should('have.length',3)

    //     cy.get('@capabilities').children('div.z-image-box').children('div').children('ul').children('li').should('have.length',9)
    // })

    // it('Check The Team Section', () => {
    //     cy.get('body > main > section > article:nth-child(5) > div.container-fluid').as('teamText').scrollIntoView()

    //     cy.get('@teamText').children('div.z-article-heading').children('h2').should('have.text','The team').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@teamText').children('div.z-article-heading').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
    //     cy.get('@teamText').children('div.z-article-heading').children('h1').should('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@teamText').children('div.z-body-copy').children('p').should('have.length',1)

    //     cy.get('body > main > section > article:nth-child(5) > div:nth-child(2)').as('teamImage').scrollIntoView()
    //     cy.get('@teamImage').children('img').should('be.visible')
    // })

    // it('Check Leaders Section', ()=>{
    //     cy.get('body > main > section > article.z-leadership.z-article.container-fluid').as('leadership').scrollIntoView()

    //     cy.get('@leadership').children('div.z-article-heading').children('h2').should('have.text','leadership').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@leadership').children('div.z-article-heading').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
    //     cy.get('@leadership').children('div.z-article-heading').children('h1').should('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@leadership').children('div.z-body-copy').children('p').should('have.length',1)

    //     cy.get('@leadership').children('ul').scrollIntoView().children('li').as('leaders')
    //     cy.get('@leaders').should('have.length',8)

    //     cy.get('@leaders').each(($li,i,$lis)=>{
    //         // TODO: check img mouseover behavior
    //         cy.get($li).children('span:nth-of-type(1)').should('have.class','z-Leadership-name z-body-copy').and('have.css','color').and('eq','rgb(0, 0, 0)')
    //         cy.get($li).children('span:nth-of-type(2)').should('have.class','z-text-green').and('have.css','text-transform').and('eq','uppercase')
    //     })
    // })

    // it('Check Where We Are Section', () => {
    //     cy.get('body > main > section > article:nth-child(7) > div').as('locations').scrollIntoView()

    //     cy.get('@locations').children('div.z-title-box').children('h2').should('have.text','Where we are').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@locations').children('div.z-title-box').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
    //     cy.get('@locations').children('div.z-title-box').children('h1').should('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@locations').children('div.z-title-box').children('h1').should('have.css','color').and('eq','rgb(0, 0, 0)')

    //     cy.get('@locations').children('div.z-text-box').children('p').should('have.length',2)

    //     cy.get('@locations').children('div.z-image-box').children('img').should('be.visible')
    // })

    // it('Check Clients Section', () => {
    //     cy.get('body > main > section > article.z-partners.z-article.container-fluid').as('clientsSection').scrollIntoView()

    //     cy.get('@clientsSection').children('div.z-article-heading').children('h2').should('have.text','Clients').and('have.css','text-transform').and('eq','uppercase')
    //     cy.get('@clientsSection').children('div.z-article-heading').children('h2').should('have.css','color').and('eq','rgb(16, 198, 78)')
    //     cy.get('@clientsSection').children('div.z-article-heading').children('h1').should('have.css','text-transform').and('eq','lowercase')
    //     cy.get('@clientsSection').children('div.z-body-copy').children('p').should('have.length',1)

    //     cy.get('@clientsSection').children('div.z-partners-wrapper').scrollIntoView().children('ul').children('li').as('partners')
    //     cy.get('@partners').should('have.length',17)

    //     cy.get('@partners').each(($li,i,$lis)=>{
    //         // TODO: check tooltip behavior
    //         cy.get($li).children('span').should('have.class','partner-link')
    //         cy.get($li).children('span').children('a').should('have.attr','style').and('contain','background-image:')
    //     })
    // })

    // it('Check Contact Section', () =>{
    //     cy.get('body > main > section > article.z-cta-block.text-center.z-article.container-fluid > div > div').as('contact').scrollIntoView()

    //     cy.get('@contact').children('p').children('a').as('cta')
    //     cy.get('@cta').should('have.text','Contact Us')
    //     cy.get('@cta').should('have.attr','href').and('contain','contact')
    // })

    // it('Check Footer', () =>{
    //     cy.get('body > footer > div > div').as('footer').scrollIntoView()

    //     cy.get('@footer').children('div').should('contain.text','new york')
    //     cy.get('@footer').children('div').should('contain.text','bogotá')
    //     cy.get('@footer').children('div').should('contain.text','los angeles')
    //     cy.get('@footer').children('div').should('contain.text','wilton')

    //     cy.get('@footer').children('div').eq(1).should('contain.text','subscribe')
    // })

    it('go to home',()=>{
        cy.get('#z-logo').click();
        cy.url().should('eq','https://zemoga.com')
    })
})