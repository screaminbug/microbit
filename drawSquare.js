let msInSec = 1000000
let distancePerSec = 100
let degreesPerSec = 200

input.onButtonPressed(Button.A, drawSquare)
input.onButtonPressed(Button.B, () => action(driveForward, 100))

function simpleMovement(degrees: number, p1a: number, p2a: number, p1b: number, p2b: number): void {
	    let timeToWait = (degrees * msInSec) / degreesPerSec;
	    pins.servoWritePin(AnalogPin.P1, p1a);
	    pins.servoWritePin(AnalogPin.P2, p2a);
	    control.waitMicros(timeToWait);
	    pins.servoWritePin(AnalogPin.P1, p1b);
	    pins.servoWritePin(AnalogPin.P2, p2b);
}

function turnLeft(degrees: number): void {
	    simpleMovement(degrees, 45, 45, 90, 90);
}

function driveForward(degrees: number): void {
	    simpleMovement(degrees, 0, 180, 90, 90);
}

function drawSquare() {
	    wait();
	    for (let i = 0; i < 4; ++i) {
		            left();
		            fwd();
		        }
}
function action(driveFn: (a: number) => void, amount: number) {
	    basic.pause(500);
	    driveFn(amount)
}

function wait() {
	    basic.pause(500);
}

function left() {
	    turnLeft(90);
	    wait();
}

function fwd() {
	    driveForward(100);
	    wait();
}
