import { motion, AnimatePresence } from 'framer-motion';
import { useMeasure } from 'react-use';
import classNames from 'classnames';
import { ReactNode } from 'react';

import { ignoreCircularReferences } from 'lib/ignoreCircularReferences';

type ResizablePanelProps = {
  children: ReactNode;
  open: boolean;
  className?: string;
  wrapperClassName?: string;
};

const ResizablePanel = (props: ResizablePanelProps) => {
  const [ref, { height }] = useMeasure();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: props.open ? height : 0 }}
        exit={{ height: 0 }}
        key={JSON.stringify(props.children, ignoreCircularReferences())}
        className={classNames('overflow-hidden', props.wrapperClassName)}
      >
        <motion.div exit={{ opacity: 0 }} ref={(el) => ref(el!)} className={props.className}>
          {props.children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResizablePanel;
