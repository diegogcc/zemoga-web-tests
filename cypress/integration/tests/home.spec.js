/// <reference types="Cypress" />

context('Home', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Check Z-Hero', () => {
        // HEADER
        cy.get('.heading > img').should('be.visible')

        // CTA
        cy.get('[href="about"]').should('contain.text', 'learn more')
        cy.get('.z-reel-cta').should('contain.text', 'watch our reel')

        // OTHER
        cy.get('body > main > section.active.z-hero.z-hero--home-page > div.z-hero-box.z-flexteaser.left > div.arrow-downward-white').should('be.visible') //arrow

        // VIDEO
        cy.get('#home-video-1').should('have.attr','loop')
        // cy.get('#home-video-1').invoke('attr', 'autoplay').should('be.true')
        cy.get('#home-video-1').should('have.attr','autoplay')

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
        cy.go('back')
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

    it('Check Learn More CTA', () => {
        cy.get('body > main > section.active.z-hero.z-hero--home-page > div.z-hero-box.z-flexteaser.left > div.z-hero-content > a:nth-child(3)').invoke('css', 'color').should('eq','rgb(255, 255, 255)')
        cy.get('body > main > section.active.z-hero.z-hero--home-page > div.z-hero-box.z-flexteaser.left > div.z-hero-content > a:nth-child(3)').invoke('css', 'border-bottom-color').should('eq','rgb(255, 255, 255)')
        cy.get('body > main > section.active.z-hero.z-hero--home-page > div.z-hero-box.z-flexteaser.left > div.z-hero-content > a:nth-child(3)').click()
        cy.url().should('include', 'about')
    })

    it('Check Reel CTA', () => {
        /*
            TODO
            Cypress doesn't fully support testing iframes        
        */
    })

    it('Check Case Studies Header', () => {
        cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading').scrollIntoView()

        cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading > div > div.z-article-heading > h2').should('contain.text','work').and('have.css','color').and('eq','rgb(16, 198, 78)')
        // cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading > div > div.z-article-heading > h2').invoke('css','fontSize').should('be.approximately', '12px')
        cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading > div > div.z-article-heading > h1').should('contain.text','what we do for our clients').and('have.css','color').and('eq','rgb(0, 0, 0)')
        cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading > div > div.z-body-copy > p > span').should('have.css', 'color').and('eq', 'rgb(0, 0, 0)')

        cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading > div > div.z-body-copy > p > span > a').invoke('css','color').should('eq', 'rgb(16, 198, 78)')
        cy.get('body > main > article.z-main-content-full.z-article.case-studies-heading > div > div.z-body-copy > p > span > a').click()
        cy.url().should('include','contact')
    })

    it('Check Reel Section', () => {
        cy.get('body > main > article:nth-child(4)').scrollIntoView()

        cy.get('body > main > article:nth-child(4) > div > div > div > h2').should('contain.text', 'We have much more to show').and('have.css', 'color').and('eq', 'rgb(16, 198, 78)')
        cy.get('body > main > article:nth-child(4) > div > div > div > h1').should('contain.text', 'we focus on doing work we can be proud of').and('have.css', 'color').and('eq', 'rgb(0, 0, 0)')
        cy.get('body > main > article:nth-child(4) > div > div > p > button').should('have.css', 'color').and('eq', 'rgb(0, 0, 0)')
        cy.get('body > main > article:nth-child(4) > div > div > p > button').should('have.css', 'border-bottom-color').and('eq', 'rgb(0, 0, 0)')
        /*
            TODO: iframe
            Cypress doesn't fully support testing iframes        
        */
    })

    it('Check Home Main section', ()=>{
        cy.get('body > main > section.z-main-section.z-masonry').scrollIntoView()

        // FEATURED ARCTICLE
        cy.get('body > main > section.z-main-section.z-masonry > div.z-masonry__half-left > article > div > div.z-masonry__detail').as('featuredArticle')
        cy.get('@featuredArticle').children('h6').should('contain.text','Featured Article').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@featuredArticle').children('a').should('contain.text','Read more').and('have.css','text-transform').and('eq','lowercase')
        cy.get('@featuredArticle').children('a').should('have.attr','href').and('contain','blog')

        // PRESENCE
        cy.get('body > main > section.z-main-section.z-masonry > div.z-masonry__half-right > article.z-masonry-item.z-masonry__top-left.z-masonry__weather.z-masonry--theme-dark > div > div.slick-initialized.slick-slider > div > div').as('slick')
        cy.get('@slick').children().should('have.length',5)
        // TODO: Checck each city

        // BLOG
        cy.get('body > main > section.z-main-section.z-masonry > div.z-masonry__half-right > article.z-masonry-item.z-masonry__top-right.z-masonry__article.z-masonry--theme-light').children('div').children('div').as('blog')
        cy.get('@blog').children('h6').should('have.text','In the Blog').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@blog').children('h4').should('have.css','text-transform').and('eq','lowercase')

        // INSTAGRAM
        cy.get('body > main > section.z-main-section.z-masonry > div.z-masonry__half-right > article.z-masonry-item.z-masonry__bottom-left.z-masonry__instagram.z-masonry--theme-dark').children('div').as('instagram')
        cy.get('@instagram').children('h6').should('have.text','Instagram').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@instagram').children('div').children('div').should('have.class','slick-list')

        // JOBS
        cy.get('body > main > section.z-main-section.z-masonry > div.z-masonry__half-right > article.z-masonry-item.z-masonry__bottom-right.z-masonry__article.z-masonry--theme-light').children('div').children('div').as('jobs')
        cy.get('@jobs').children('h6').should('have.text','Jobs').and('have.css','text-transform').and('eq','uppercase')
        cy.get('@jobs').children('h4').should('have.css','text-transform').and('eq','lowercase')
        cy.get('@jobs').children('a').should('have.attr','href').and('contain','jobs')
    })

    it('Check Contact Section', () =>{
        cy.get('body > main > article:nth-child(6)').as('contact').scrollIntoView()

        cy.get('@contact').children('div').children('div').children('p').children('a').as('cta')
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