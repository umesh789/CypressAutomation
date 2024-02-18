describe('orange test suite',function()
{

it('verify url',function(){
    cy.visit("/")
    cy.url().should('include', 'orangehrm')
})

it('Verify title', function(){

    cy.visit("/")
    cy.title().should('include', 'HRM')
    cy.title().should('equal', 'OrangeHRM1')
    
})

it('login logout', function(){

    cy.visit("/")
    cy.get("input[name='username']").type('admin').should('have.value','admin')
    cy.get("input[name='password']").type('admin123').should('have.value','admin123')
    cy.get("button[type='submit']").click()
})

it('Select and check boxes', function(){

    cy.visit("/")
    cy.get("select[name='city']").select(2).find(":selected").contains("Bhopal")
    cy.get("select[name='hobbies']").select(["Dance","Singing"])
    cy.get("inout[type='checkbox']").check({force: true})
    cy.get("input[type= 'checkbox']").first().check()
})


})