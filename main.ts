basic.showIcon(IconNames.Heart)
NEZHA_V2.nezha2MotorSpeedCtrolExport(MotorPostion.M1, 0)
NEZHA_V2.nezha2MotorSpeedCtrolExport(MotorPostion.M2, 0)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        NEZHA_V2.nezha2MotorSpeedCtrolExport(MotorPostion.M1, -10)
        NEZHA_V2.nezha2MotorSpeedCtrolExport(MotorPostion.M2, 10)
    } else {
        NEZHA_V2.nezha2MotorSpeedCtrolExport(MotorPostion.M1, 0)
        NEZHA_V2.nezha2MotorSpeedCtrolExport(MotorPostion.M2, 0)
    }
})
