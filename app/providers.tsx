"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { IconContext } from "react-icons";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider {...themeProps}>
				<IconContext.Provider value={{ className: "react-icon" }}>
					{children}
				</IconContext.Provider>;
			</NextThemesProvider>
		</NextUIProvider>
	);
}
