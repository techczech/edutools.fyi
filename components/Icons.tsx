import React from 'react';

// A generic Icon component that renders a Google Material Symbol.
const Icon: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => (
    <span className={`material-symbols-outlined ${className || ''}`} {...props}>
        {children}
    </span>
);

// We keep the named exports to avoid changing all the import statements across the app.
// The props type is updated to reflect that we are rendering a <span>, not an <svg>.
type IconProps = React.HTMLAttributes<HTMLSpanElement>;

const createIcon = (iconName: string, defaultClassName?: string) => {
    const Component = ({ className, ...props }: IconProps) => {
        const finalClassName = [defaultClassName, className].filter(Boolean).join(' ');
        return <Icon className={finalClassName} {...props}>{iconName}</Icon>;
    };
    Component.displayName = `Icon(${iconName})`;
    return Component;
};

// The original SVGs had hardcoded sizes, which we replicate with font-size classes.
export const BotIcon = createIcon('smart_toy', 'text-xl');
export const UserIcon = createIcon('person', 'text-xl');
export const SendIcon = createIcon('send', 'text-2xl');
export const BookOpenIcon = createIcon('menu_book', 'text-xl');
export const CodeBracketIcon = createIcon('code', 'text-3xl');
export const AcademicCapIcon = createIcon('school', 'text-3xl');
export const BeakerIcon = createIcon('science', 'text-3xl');
export const LightBulbIcon = createIcon('lightbulb', 'text-3xl');
export const DocumentTextIcon = createIcon('description', 'text-2xl');
export const LinkIcon = createIcon('link'); // No default size, sized by caller
export const VideoCameraIcon = createIcon('videocam', 'text-3xl');
export const SunIcon = createIcon('light_mode', 'text-2xl');
export const MoonIcon = createIcon('dark_mode', 'text-2xl');
export const GridIcon = createIcon('apps', 'text-xl');
export const SparklesIcon = createIcon('auto_awesome', 'text-xl');
export const ClipboardIcon = createIcon('content_paste', 'text-3xl');
export const CanvasIcon = createIcon('draw', 'text-3xl');
export const DevicePhoneMobileIcon = createIcon('phone_iphone', 'text-3xl');
export const CodeWindowIcon = createIcon('terminal', 'text-3xl');
export const CompassIcon = createIcon('explore', 'text-xl');
export const TipsAndUpdatesIcon = createIcon('tips_and_updates', 'text-3xl');
export const ClipboardDocumentIcon = createIcon('content_copy');
export const CheckIcon = createIcon('check');