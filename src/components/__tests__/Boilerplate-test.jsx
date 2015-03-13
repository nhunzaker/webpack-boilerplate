import Boilerplate from '../boilerplate'

describe('Boilerplate', function() {

  it ('works', function() {
    let el = React.addons.TestUtils.renderIntoDocument(<Boilerplate />)

    el.getDOMNode().innerHTML.should.match(/Great things/)
  })

})
