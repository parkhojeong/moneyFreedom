import React, { Component } from "react";
import { connect } from "react-redux";
import { calculate } from "./calculatorSlice";
import styles from "./Calculator.module.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoney: "",
      increaseRate: "",
      goalMoney: "",
      goalMoneyMultiplier: 10000,
      currentMoneyMultiplier: 10000,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: Number(e.target.value),
    });
  };

  render() {
    return (
      <div>
        <div className={styles.row}>
          <div className={styles.inputArea}>
            <div className={styles.inputBox}>
              <span className="title">현재 자산: </span>

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
              <span className="title">매년 투자액 증가율: </span>
              <input
                name="increaseRate"
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
            {this.state.goalMoneyMultiplier}

            <button
              onClick={() => {
                this.props.calculate({
                  currentMoney: this.state.currentMoney,
                  increaseRate: this.state.increaseRate,
                  goalMoney: this.state.goalMoney,
                });
              }}
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
