import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgColor,
  Container,
  LeftContainer,
  Heading,
  Img,
  RightContainer,
  UlOrderList,
  List,
  Button,
  TextArea,
} from './styledComponent'

class Home extends Component {
  state = {bold: false, italic: false, underline: false}

  clickBold = () => {
    this.setState(privwes => ({bold: !privwes.bold}))
  }

  clickItalic = () => {
    console.log('hello')
    this.setState(privwes => ({italic: !privwes.italic}))
  }

  clickUnderLine = () => {
    this.setState(privwes => ({underline: !privwes.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    console.log(italic)
    return (
      <BgColor>
        <Container>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <UlOrderList className="ul-order-list">
              <List>
                <Button
                  onClick={this.clickBold}
                  data-testid="bold"
                  isTrue={bold}
                >
                  <VscBold />
                </Button>
              </List>

              <List>
                <Button
                  onClick={this.clickItalic}
                  data-testid="italic"
                  isTrue={italic}
                >
                  <GoItalic />
                </Button>
              </List>

              <List>
                <Button
                  onClick={this.clickUnderLine}
                  data-testid="underline"
                  isTrue={underline}
                >
                  <AiOutlineUnderline />
                </Button>
              </List>
            </UlOrderList>
            <TextArea
              rows="8"
              cols="50"
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </RightContainer>
        </Container>
      </BgColor>
    )
  }
}

export default Home
