import React, { Component } from "react";
import { connect } from "react-redux";
import { calculate } from "./calculatorSlice";
import styles from "./Calculator.module.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDepositMoney: "",
      depositIncreaseRate: "",
      goalMoney: "",
      investingGainRate: "",
      goalMoneyMultiplier: 10000,
      initialDepositMoneyMultiplier: 10000,
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
      initialDepositMoney,
      depositIncreaseRate,
      investingGainRate,
      goalMoney,
      initialMoney,
      depositPeriod,
    } = this.state;

    if (
      !(typeof initialDepositMoney === "number") ||
      initialDepositMoney < 0 ||
      !(typeof depositIncreaseRate === "number") ||
      depositIncreaseRate < 0 ||
      !(typeof investingGainRate === "number") ||
      investingGainRate < 0 ||
      !(typeof goalMoney === "number") ||
      goalMoney < 0 ||
      !(typeof initialMoney === "number") ||
      initialMoney < 0 ||
      !Number.isInteger(depositPeriod) ||
      depositPeriod <= 0
    ) {
      this.setState({ enableButton: false });
    } else {
      this.setState({ enableButton: true });
    }
  };

  handleClick = () => {
    const {
      initialDepositMoney,
      depositIncreaseRate,
      investingGainRate,
      goalMoney,
      initialMoney,
      depositPeriod,
    } = this.state;

    if (
      !(typeof initialDepositMoney === "number") ||
      initialDepositMoney < 0 ||
      !(typeof depositIncreaseRate === "number") ||
      depositIncreaseRate < 0 ||
      !(typeof investingGainRate === "number") ||
      investingGainRate < 0 ||
      !(typeof goalMoney === "number") ||
      goalMoney < 0 ||
      !(typeof initialMoney === "number") ||
      initialMoney < 0 ||
      !Number.isInteger(depositPeriod)
    )
      return;

    this.props.calculate({
      initialDepositMoney:
        this.state.initialDepositMoney *
        this.state.initialDepositMoneyMultiplier,
      depositIncreaseRate: this.state.depositIncreaseRate,
      investingGainRate: this.state.investingGainRate,
      goalMoney: this.state.goalMoney * this.state.goalMoneyMultiplier,
      initialMoney: this.state.initialMoney * 10000,
      depositPeriod: this.state.depositPeriod,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.row}>
          <div className={styles.inputArea}>
            <div className={styles.inputBox}>
              <span className="title">초기 자본금: </span>
              <input
                name="initialMoney"
                onChange={this.handleChange}
                type="text"
              />
              만원
            </div>
            <div className={styles.inputBox}>
              <span className="title">첫 해 저축액: </span>
              <input
                name="initialDepositMoney"
                onChange={this.handleChange}
                type="text"
              />
              <select
                name="initialDepositMoneyMultiplier"
                value={this.state.initialDepositMoneyMultiplier}
                onChange={this.handleChange}
              >
                <option value="100000000">억원</option>
                <option value="10000">만원</option>
                <option value="1">원</option>
              </select>
            </div>
            <div className={styles.inputBox}>
              <span className="title">매년 저축액 증가율: </span>
              <input
                name="depositIncreaseRate"
                onChange={this.handleChange}
                type="text"
              />
              %
            </div>
            <div className={styles.inputBox}>
              <span className="title">저축 기간(최소 1년 이상): </span>
              <input
                name="depositPeriod"
                onChange={this.handleChange}
                type="text"
                placeholder="(정수)"
              />
              년
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
              />
              %
            </div>
            <div className={styles.inputBox}>
              <span className="title">목표 금액: </span>
              <input
                name="goalMoney"
                onChange={this.handleChange}
                type="text"
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
