import React, { Component } from "react";
import { connect } from "react-redux";
import { calculate } from "./calculatorSlice";
import styles from "./Calculator.module.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoney: "",
      depositIncreaseRate: "",
      goalMoney: "",
      investingGainRate: "",
      goalMoneyMultiplier: 10000,
      currentMoneyMultiplier: 10000,
      enableButton: false,
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: Number(e.target.value),
      },
      this.updateEnableButton
    );
  };

  updateEnableButton = (e) => {
    const {
      currentMoney,
      depositIncreaseRate,
      investingGainRate,
      goalMoney,
    } = this.state;

    if (
      !(typeof currentMoney === "number") ||
      currentMoney < 0 ||
      !(typeof depositIncreaseRate === "number") ||
      depositIncreaseRate < 0 ||
      !(typeof investingGainRate === "number") ||
      investingGainRate < 0 ||
      !(typeof goalMoney === "number") ||
      goalMoney < 0
    ) {
      this.setState({ enableButton: false });
    } else {
      this.setState({ enableButton: true });
    }
  };

  handleClick = () => {
    const {
      currentMoney,
      depositIncreaseRate,
      investingGainRate,
      goalMoney,
    } = this.state;

    if (
      !(typeof currentMoney === "number") ||
      currentMoney < 0 ||
      !(typeof depositIncreaseRate === "number") ||
      depositIncreaseRate < 0 ||
      !(typeof investingGainRate === "number") ||
      investingGainRate < 0 ||
      !(typeof goalMoney === "number") ||
      goalMoney < 0
    )
      return;

    this.props.calculate({
      currentMoney: this.state.currentMoney * this.state.currentMoneyMultiplier,
      depositIncreaseRate: this.state.depositIncreaseRate,
      investingGainRate: this.state.investingGainRate,
      goalMoney: this.state.goalMoney * this.state.goalMoneyMultiplier,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.row}>
          <div className={styles.inputArea}>
            <div className={styles.inputBox}>
              <span className="title">첫 연도 저축액: </span>

              <input
                name="currentMoney"
                onChange={this.handleChange}
                type="text"
                placeholder="(숫자 입력)"
              />
              <select
                name="currentMoneyMultiplier"
                value={this.state.currentMoneyMultiplier}
                onChange={this.handleChange}
              >
                <option value="100000000">억원</option>
                <option value="10000">만원</option>
                <option value="1">원</option>
              </select>
            </div>
            <div className={styles.inputBox}>
              <span className="title">매년 저축 증가율: </span>
              <input
                name="depositIncreaseRate"
                onChange={this.handleChange}
                type="text"
                placeholder="(숫자 입력)"
              />
              %
            </div>
            {/* <div className={styles.inputBox}>
            <span className="title">매년 투자액 증가량: </span>
            <input type="text" />
          </div> */}
            <div className={styles.inputBox}>
              <span className="title">매년 투자 수익률: </span>
              <input
                name="investingGainRate"
                onChange={this.handleChange}
                type="text"
                placeholder="(숫자 입력)"
              />
              %
            </div>
            <div className={styles.inputBox}>
              <span className="title">목표 금액: </span>
              <input
                name="goalMoney"
                onChange={this.handleChange}
                type="text"
                placeholder="(숫자 입력)"
              />
              <select
                name="goalMoneyMultiplier"
                value={this.state.goalMoneyMultiplier}
                onChange={this.handleChange}
              >
                <option value="100000000">억원</option>
                <option value="10000">만원</option>
                <option value="1">원</option>
              </select>
            </div>
            <button
              disabled={!this.state.enableButton}
              onClick={this.handleClick}
            >
              계산
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  result: state.calculator.result,
});
const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (action) => dispatch(calculate(action)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
