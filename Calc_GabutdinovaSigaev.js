function StartCalc()
{
TestedApps.Items(0).Run(1);
}

function Add2and5()
{
calc = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1");
calc.WinFormsObject("button21").Click(); //C
calc.WinFormsObject("button10").Click(); //2
calc.WinFormsObject("button4").Click(); //+
calc.WinFormsObject("button6").Click(); //5
calc.WinFormsObject("button14").Click(); //=
aqObject.CheckProperty(calc.WinFormsObject("textBox1"), 'wText', cmpEqual, "=7")
}

function Diff7and5()
{
calc = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1");
calc.WinFormsObject("button21").Click(); //C
calc.WinFormsObject("button1").Click(); //7
calc.WinFormsObject("button8").Click(); //-
calc.WinFormsObject("button6").Click(); //5
calc.WinFormsObject("button14").Click(); //=
aqObject.CheckProperty(calc.WinFormsObject("textBox1"), 'wText', cmpEqual, "=2");
}

function Mult2and3()
{
calc = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1");
calc.WinFormsObject("button21").Click(); //C
calc.WinFormsObject("button10").Click(); //2
calc.WinFormsObject("button13").Click(); //*
calc.WinFormsObject("button11").Click(); //3
calc.WinFormsObject("button14").Click(); //=
aqObject.CheckProperty(calc.WinFormsObject("textBox1"), 'wText', cmpEqual, "=6");
}

function Div6and3()
{
calc = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1");
calc.WinFormsObject("button21").Click(); //C
calc.WinFormsObject("button7").Click(); //6
calc.WinFormsObject("button15").Click(); // /
calc.WinFormsObject("button11").Click(); //3
calc.WinFormsObject("button14").Click(); //=
aqObject.CheckProperty(calc.WinFormsObject("textBox1"), 'wText', cmpEqual, "=2");
}

function StopCalc()
{
TestedApps.Items(0).Close();
}

function test()
{
StartCalc();
Add2and5();
Diff7and5();
Mult2and3();
Div6and3();
StopCalc();
}