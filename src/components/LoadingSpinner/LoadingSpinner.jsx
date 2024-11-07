import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerStyle from "./LoadingSpinner.module.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export const LoadingSpinner = ({ isLoading, fullscreen, children }) => {
  if (isLoading && fullscreen) {
    return (
      <>
        <div className={SpinnerStyle.sw_fullscreen_loader}>
          <FontAwesomeIcon
            icon={faSpinner}
            className={SpinnerStyle.spinner_icon}
          />
        </div>
        {children}
      </>
    );
  }
  if (isLoading) {
    return (
      <div className={SpinnerStyle.sw_relative_loader}>
        <FontAwesomeIcon
          icon={faSpinner}
          className={SpinnerStyle.spinner_icon}
        />
        {children}
      </div>
    );
  }
  return children;
};
