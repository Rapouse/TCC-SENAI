import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: true, title: 'Página Inicial' }} />
        </Stack>
    )
}

export default RootLayout