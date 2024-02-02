import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// eslint-disable-next-line react/display-name
const Button = forwardRef(
    (
        {
            to,
            href,
            leftIcon,
            rightIcon,
            disabled = false,
            className = '',
            onClick,
            children,
            type1 = false,
            type2 = false,
            type3 = false,
            type4 = false,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';
        const props = {
            onClick,
            ...passProps,
        };

        // remove event when btn disabled
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        return (
            <Comp
                {...props}
                ref={ref}
                className={twMerge(
                    clsx(
                        'p-2 text-sm rounded-md border border-transparent bg-transparent outline-none cursor-pointer ',
                        className,
                        type1 && 'bg-main-500 text-white',
                        type2 && 'bg-white text-main-500',
                        type3 && 'border-white text-white',
                        type4 && 'text-main-500 bg-main-50',
                    ),
                )}
            >
                {leftIcon && <span style={{ marginRight: '12px' }}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span style={{ marginLeft: '12px' }}>{rightIcon}</span>}
            </Comp>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    type1: PropTypes.bool,
    type2: PropTypes.bool,
    type3: PropTypes.bool,
    type4: PropTypes.bool,
};

export default Button;