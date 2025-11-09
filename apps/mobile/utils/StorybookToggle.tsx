import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import * as storage from "./storage"
import {Image} from "expo-image";

const STORYBOOK_ENABLED_KEY = "storybook_enabled"

export interface StorybookToggleProps {
    children: React.ReactNode
}

/**
 * A component that allows toggling between the main app and Storybook in development.
 * In production builds, this always renders the main app.
 */
export const StorybookToggle: React.FC<StorybookToggleProps> = ({ children }) => {
    const [showStorybook, setShowStorybook] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const loadStorybookState = async () => {
            try {
                setIsLoading(true)
                const enabled = await storage.load(STORYBOOK_ENABLED_KEY) || false
                setShowStorybook(enabled as boolean)
            } catch (error) {
                // Default to false if there's an error loading
                setShowStorybook(false)
            } finally {
                setIsLoading(false)
            }
        }

        loadStorybookState()
    }, [])

    const toggleStorybook = async () => {
        setIsLoading(true)
        const newState = !showStorybook
        setShowStorybook(newState)
        storage.save(STORYBOOK_ENABLED_KEY, newState)
        setIsLoading(false)
    }

    // In production, always show the main app
    if (!__DEV__) {
        return <>{children}</>
    }

    // Show loading state while checking storage
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }

    // Show Storybook if enabled
    if (showStorybook) {
        const StorybookUI = require("./../.rnstorybook").default

        return (
            <View style={styles.container}>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity style={styles.toggleButton} onPress={toggleStorybook}>
                        <Text style={styles.toggleButtonText}>← Back to App</Text>
                    </TouchableOpacity>
                </View>
                <StorybookUI />
            </View>
        )
    }

    // Show main app with toggle option
    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <TouchableOpacity style={styles.toggleButton} onPress={toggleStorybook}>
                    <Image
                        source={require('@/assets/images/icon-storybook.png')}
                        style={{width: 15, height: 15, marginRight: 10 }}
                    />
                    <Text style={styles.toggleButtonText}>Storybook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.appContainer}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    loadingContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    loadingText: {
        color: "#666",
        fontSize: 16,
    },
    toggleButton: {
        flexDirection: 'row',
        backgroundColor: "#007AFF",
        borderRadius: 20,
        elevation: 5,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    toggleButtonText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
    toggleContainer: {
        position: "absolute",
        right: 20,
        top: 50,
        zIndex: 9999,
    },
})