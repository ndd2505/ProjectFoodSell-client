import React from "react";
import Cart from "./cartPageSteper/Cart";
import UserOrderInfo from "./cartPageSteper/UserOrderInfo"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompleteOrder from "./cartPageSteper/CompleteOrder"

const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
      backgroundColor:"black"
    },
    backButton: {
      marginRight: theme.spacing(1),
      minWidth: "100px"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),

    },
  }));
  
  function getSteps() {
    return ['Choose Your Food', 'Give Us Your Info', 'Confirm your order'];
  }

export default function CartPage(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const steps = getSteps();

    const getStepContent=(stepIndex)=>{
        switch (stepIndex) {
          case 0:
            return <Cart next={handleNext} hanldeTotal={hanldeTotal}/>;
          case 1:
            return <UserOrderInfo next={handleNext} total={total}/>;
          case 2:
            return <CompleteOrder />;
          default:
            return 'Unknown stepIndex';
        }
      }
    const hanldeTotal = (total) => {
        setTotal(total)
        return handleNext()
    };
      
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    
    return(
        <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div  style={{marginLeft: "150px", marginRight:"150px"}}>
              <Typography className={classes.instructions}></Typography>
                {/* <Button
                  disabled={activeStep !== 1}
                  onClick={handleBack}
                  className={classes.backButton}
                  variant="outlined"
                  color ="secondary"
                >
                  Back
                </Button> */}
            </div>
          )}
        </div>
        {getStepContent(activeStep)}
      </div>
    )
}

