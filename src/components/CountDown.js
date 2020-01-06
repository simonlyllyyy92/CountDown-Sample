import React, { useState, useEffect } from "react"
// import { useTranslation } from "react-i18next"

const CountDown = props => {
  const COUNTDOWN_SECONDS = props.duration
  const initialActive = props.initialActive
  // const { t } = useTranslation()
  const [second, setSecond] = useState(COUNTDOWN_SECONDS)
  const [isActive, setIsActive] = useState(initialActive)
  const [isInit, setIsInit] = useState(true)

  useEffect(() => {
    let interval
    // 开始倒计时
    if (isActive) {
      interval = setInterval(() => {
        setSecond(preSecond => {
          if (preSecond <= 1) {
            setIsActive(false)
            setIsInit(false)
            clearInterval(interval)
            //If this countdown btn is for appeal, switch countdown btn to confirm btn after countdown end.
            if (props.toDo === "appeal") {
              props.switchBtnMethod()
            }
            // reset
            return COUNTDOWN_SECONDS
          } else {
            return preSecond - 1
          }
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [COUNTDOWN_SECONDS, isActive, props])

  return (
    <button
      disabled={isActive}
      onClick={() => {
        setIsActive(true)
      }}
      style={{
        height: "32px",
        color: "#000",
        cursor: "pointer",
        borderRadius: "4px",
        border: "none",
        display: props.visibility ? props.visibility : ""
      }}
    >
      {/* {isActive
        ? t("label.resendAfterSecs", { secs: second })
        : isInit
        ? t("label.getVerifyCode")
        : t("label.resendCode")} */}
      {isActive ? `${second}` : "Click to start count down"}
    </button>
  )
}

export default CountDown
