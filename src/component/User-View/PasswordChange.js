import React from "react";
import ConfirmEmail from "./ChangePass/ConfirmEmail";
import ConfirmUsername from "./ChangePass/ConfirmUsername";
import ChangePass from "./ChangePass/ChangePass";
import CompleteChange from './ChangePass/ChangeSuccess';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor:"black",
      padding: "3vw"
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
    return ['Nhập Email xác nhận', 'Nhập tên đăng nhập ', 'Thay đổi mật khẩu', "Đổi mật khẩu thành công"];
  }



export default function PasswordChange(props){
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const steps = getSteps();


    const getStepContent=(stepIndex)=>{
        switch (stepIndex) {
          case 0:
            return <ConfirmEmail next={handleEmail}/>;
          case 1:
            return <ConfirmUsername next={handleUsername}/>;
          case 2:
            return <ChangePass username={username} email={email} next={handleNext}/>;
          case 3:
              return <CompleteChange />
          default:
            return 'Unknown stepIndex';
        }
    }

    const handleEmail = (something) =>{
        setEmail(something)
        return handleNext()
    }

    const handleUsername = (something) =>{
        setUsername(something)
        return handleNext()
    }

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
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
                      <div>
                        <Button
                          disabled={activeStep === steps.length-1 || activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                          variant="outlined"
                          color ="secondary"
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                {getStepContent(activeStep)}
              </div>
        )
}