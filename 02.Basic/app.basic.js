import ArrayExample from './modules/array.example.js';
import ArrayMethods from './modules/array.methods.js';
import ArrayTask from './modules/array.task.js';
import ArrowFunctionExample from './modules/arrow.function.example.js';
import BMITask from './modules/bmi.task.js';
import BreakContinue from './modules/break.continue.js';
import ComparisonOperators from './modules/comparison.operators.js';
import ConsoleExample from './modules/console.example.js';
import DataTypes from './modules/data.types.js';
import ForExample from './modules/for.example.js';
import FunctionCalling from './modules/function.calling.js';
import FunctionExample from './modules/function.example.js';
import FunctionTask from './modules/function.task.js';
import IfElseExample from './modules/if.else.example.js';
import LogicalOperators from './modules/logical.operators.js';
import LoopTask from './modules/loop.task.js';
import MathExample from './modules/math.example.js';
import ObjectExample from './modules/object.example.js';
import ObjectMethods from './modules/object.methods.js';
import ObjectTask from './modules/object.task.js';
import OperatorContraction from './modules/operator.contraction.js';
import OperatorPrecedence from './modules/operator.precedence.js';
import QuestionaryTask from './modules/questionary.task.js';
import StatementsAndExpressions from './modules/statements.and.expressions.js';
import StringMethods from './modules/string.methods.js';
import SwitchExample from './modules/switch.example.js';
import TemplateStrings from './modules/template.strings.js';
import TernaryOperator from './modules/ternary.operator.js';
import TruthyAndFalsy from './modules/truthy.and.falsy.js';
import TypeConversion from './modules/type.conversion.js';
import Variable1Example from './modules/variable1.example.js';
import Variable2Example from './modules/variable2.example.js';
import WhileExample from './modules/while.example.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppBasic extends LittleCore {
  constructor() {
    super();
    this.setModules([
      ArrayExample,
      ArrayMethods,
      ArrayTask,
      ArrowFunctionExample,
      BMITask,
      BreakContinue,
      ComparisonOperators,
      ConsoleExample,
      DataTypes,
      ForExample,
      FunctionCalling,
      FunctionExample,
      FunctionTask,
      IfElseExample,
      LogicalOperators,
      LoopTask,
      MathExample,
      ObjectExample,
      ObjectMethods,
      ObjectTask,
      OperatorContraction,
      OperatorPrecedence,
      QuestionaryTask,
      StatementsAndExpressions,
      StringMethods,
      SwitchExample,
      TemplateStrings,
      TernaryOperator,
      TruthyAndFalsy,
      TypeConversion,
      Variable1Example,
      Variable2Example,
      WhileExample,
    ]);
  }
}

new AppBasic().init();
