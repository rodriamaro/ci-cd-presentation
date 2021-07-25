const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

// In the Mocha "before" hook, create the browser and page objects.
before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

// Start a test suite with two tests.
describe('Slides page', () => {
  it('slides are present', async () => {
    // Set the view port size so we can "see" the whole page
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' })

    // Assert the search input is there
    const slidesSection = await page.$('.slides')
    assert.ok(slidesSection)
  }).timeout(20000)

})

after(async () => {
  await browser.close()
})