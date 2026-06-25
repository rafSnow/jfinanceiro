import React from 'react';
import { motion } from 'framer-motion';

const colorMap = {
  green: {
    bg: 'bg-emerald-45 dark:bg-emerald-950/50',
    text: 'text-emerald-700 dark:text-emerald-400',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
    icon: 'text-emerald-600 dark:text-emerald-400'
  },
  blue: {
    bg: 'bg-sky-45 dark:bg-sky-950/50',
    text: 'text-sky-700 dark:text-sky-400',
    iconBg: 'bg-sky-100 dark:bg-sky-900/50',
    icon: 'text-sky-600 dark:text-sky-400'
  },
  red: {
    bg: 'bg-rose-45 dark:bg-rose-950/50',
    text: 'text-rose-700 dark:text-rose-400',
    iconBg: 'bg-rose-100 dark:bg-rose-900/50',
    icon: 'text-rose-600 dark:text-rose-400'
  },
  amber: {
    bg: 'bg-amber-45 dark:bg-amber-950/50',
    text: 'text-amber-700 dark:text-amber-400',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50',
    icon: 'text-amber-600 dark:text-amber-400'
  },
  purple: {
    bg: 'bg-violet-45 dark:bg-violet-950/50',
    text: 'text-violet-700 dark:text-violet-400',
    iconBg: 'bg-violet-100 dark:bg-violet-900/50',
    icon: 'text-violet-600 dark:text-violet-400'
  }
};

export default function SummaryCard({
  label,
  value,
  icon: Icon,
  color = 'blue',
  index = 0
}) {
  const c = colorMap[color] || colorMap.blue;

  const formatted =
    typeof value === 'number'
      ? value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={`
        ${c.bg}
        rounded-[22px]
        p-4
        flex
        flex-col
        gap-2.5
        border
        border-white/20
        shadow-2xl
        hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
      `}
    >
      <div
        className={`
          w-8
          h-8
          rounded-full
          ${c.iconBg}
          flex
          items-center
          justify-center
        `}
      >
        {Icon && <Icon size={16} className={c.icon} />}
      </div>

      <div>
        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider leading-tight">
          {label}
        </p>

        <p
          className={`
            text-[17px]
            font-bold
            ${c.text}
            tracking-[-0.3px]
            mt-0.5
          `}
        >
          {formatted}
        </p>
      </div>
    </motion.div>
  );
}