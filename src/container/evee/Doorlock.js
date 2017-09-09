import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import { connect } from 'react-redux'
import { getUser } from '../../actions'

class Doorlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'warning',
    }
  }
  verify() {
    this.props.user.user.isRegularMember
            ? this.setState({ mode: 'Regular' }) : this.setState({ mode: 'Ilregular' })
  }
  render() {
    if (this.state.mode === 'warning') {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginLeft: '20px',
          textAlign: 'center',
          backgroundColor: 'white',
        }}
        >
          <h1 style={{
            fontSize: '32pt',
            borderBottom: '1px solid black',
            padding: '20px',
            marginBottom: '12px',
          }}
          >동방 비밀번호</h1>
          <div style={{
            fontSize: '24px',
            color: 'red',
            margin: '12px 0px',
            padding: '12px',
          }}
          >
            <Icon type="exclamation-circle" /> 동방 비밀번호를 동아리 회원 이외의 사람이나 준회원에게 알려주면 안됩니다!
                    </div>
          <div>
            <Button
              style={{
                backgroundColor: '#1976D2',
                fontSize: '12pt',
                color: 'white',
                margin: '12px 0px' }}
              onClick={() => this.verify()}
            >
              <Icon type="double-right" /> 보러가기
                        </Button>
          </div>
        </div>
      )
    } else if (this.state.mode === 'Regular') {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'colunm',
          width: '100%',
          marginLeft: '20px',
          textAlign: 'center',
          backgroundColor: 'white',
        }}
        >
          <h1 style={{
            fontSize: '32pt',
            borderBottom: '1px solid black',
            padding: '20px',
            marginBottom: '12pt',
          }}
          >동방 비밀번호</h1>
          <h1 style={{
            margin: '12px 0px',
            fontSize: '24pt',
          }}
          >[동방 비번]</h1>
        </div>
      )
    }

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'colunm',
        width: '100%',
        marginLeft: '20px',
        textAlign: 'center',
        backgroundColor: 'white',
      }}
      >
        <h1 style={{
          fontSize: '32pt',
          borderBottom: '1px solid black',
          padding: '20px',
          marginBottom: '12px',
        }}
        >동방 비밀번호</h1>
        <div style={{ margin: '12px 0px' }}>
          <img
            src="data:image/jpeg;base64,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"
            alt="너굴맨"
          />
        </div>
        <h1 style={{
          margin: '12px',
        }}
        >"정회원 심사부터 통과하고 오라구!!"
                    </h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})
const mapDispatchToProps = ({
  getUser,
})
export default connect(mapStateToProps, mapDispatchToProps)(Doorlock)
