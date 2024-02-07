import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import PropTypes from "prop-types";

const InpurtForm = ({
  style = "form-input",
  inputClassname,
  label,
  id,
  type = "text",
  register = () => {},
  validate,
  containerClassname,
  labelClassname,
  error,
  placeholder,
  options = [],
}) => {
  return (
    <div className={twMerge(clsx("flex flex-col gap-2 w-full", containerClassname))}>
      {label && (
        <label
          className={twMerge(clsx("font-medium text-sm text-main-500", labelClassname))}
          htmlFor={id}>
          {label}
        </label>
      )}
      {options.length >= 2 ? (
        <div className="flex flex-row gap-4">
          {options.map((opt) => {
            return (
              <div key={opt.id} className={twMerge(clsx("flex flex-col gap-2 w-full"))}>
                <label
                  className={twMerge(clsx("font-medium text-sm text-main-500", labelClassname))}
                  htmlFor={opt.id}>
                  {opt.label}
                </label>
                <input
                  className={twMerge(
                    clsx(
                      style,
                      inputClassname,
                      "rounded-md text-main-500 placeholder:text-sm",
                      error &&
                        " bg-red-50 border-red-500 text-red-900  focus:ring-red-500 focus:border-red-500 "
                    )
                  )}
                  placeholder={placeholder}
                  type={type}
                  name={id}
                  id={opt.id}
                  value={opt.value}
                  {...register(opt.role, validate)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <input
          className={twMerge(
            clsx(
              style,
              inputClassname,
              "rounded-md text-main-500 placeholder:text-sm",
              error &&
                " bg-red-50 border-red-500 text-red-900  focus:ring-red-500 focus:border-red-500 "
            )
          )}
          placeholder={placeholder}
          type={type}
          id={id}
          name={id}
          {...register(id, validate)}
        />
      )}
      {error && (
        <p className=" text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{error}</span>
        </p>
      )}
    </div>
  );
};

InpurtForm.propTypes = {
  style: PropTypes.string,
  inputClassname: PropTypes.string,
  containerClassname: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  validate: PropTypes.any.isRequired,
  error: PropTypes.string,
  labelClassname: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

export default InpurtForm;
