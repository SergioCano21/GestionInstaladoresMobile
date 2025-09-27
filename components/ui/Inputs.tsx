import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { KeyboardTypeOptions, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text
      className="font-medium text-base flex-shrink"
      style={{ color: Colors.black.default }}
    >
      {children}
    </Text>
  );
}

export function InputText<T>({
  placeholder,
  type = "text",
  name,
  loading = false,
  setValue,
}: {
  placeholder: string;
  type?: "text" | "password" | "email" | "number";
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}) {
  const keyboardType = {
    text: "default",
    password: "default",
    email: "email-address",
    number: "number-pad",
  }[type];

  return (
    <TextInput
      className="h-12 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100 focus:border-gray-500"
      placeholder={placeholder}
      placeholderTextColor={"#6b7280"}
      secureTextEntry={type === "password"}
      autoCapitalize={
        type === "password" || type === "email" ? "none" : "sentences"
      }
      keyboardType={keyboardType as KeyboardTypeOptions}
      onChangeText={(text) =>
        setValue((prev) => ({
          ...prev,
          [name]: type === "number" ? Number(text) : text,
        }))
      }
      editable={!loading}
    />
  );
}

export function InputDate() {
  const [date, setDate] = useState<Date | null>(null);
  const [showDate, setShowDate] = useState(false);
  return (
    <>
      <TextInput
        className="h-12 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100"
        placeholder={"--/--/----"}
        placeholderTextColor={"#111827"}
        editable={false}
        onPress={() => setShowDate(true)}
        value={
          date
            ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            : ""
        }
      />
      {showDate && (
        <DateTimePickerModal
          mode="date"
          display="inline"
          isVisible={showDate}
          onConfirm={(date) => {
            setDate(date);
            setShowDate(false);
          }}
          onCancel={() => setShowDate(false)}
          cancelTextIOS="Cerrar"
          confirmTextIOS="Confirmar"
          accentColor={Colors.primary.default}
          locale="es_mx"
          buttonTextColorIOS={Colors.primary.default}
          isDarkModeEnabled={false}
          themeVariant="light"
        />
      )}
    </>
  );
}

export function InputNumber({ placeholder }: { placeholder: string }) {
  return (
    <TextInput
      className="h-12 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100 focus:border-gray-500"
      placeholder={placeholder}
      placeholderTextColor={"#6b7280"}
      keyboardType="numeric"
    />
  );
}

export function InputTextArea<T>({
  placeholder,
  name,
  loading = false,
  setValue,
}: {
  placeholder: string;
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}) {
  return (
    <TextInput
      className="px-3 py-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100 focus:border-gray-500"
      placeholder={placeholder}
      placeholderTextColor={"#6b7280"}
      multiline={true}
      numberOfLines={4}
      textAlignVertical="top"
      onChangeText={(text) =>
        setValue((prev) => ({
          ...prev,
          [name]: text,
        }))
      }
      editable={!loading}
    />
  );
}

export function InputTimeAndDate<T>({
  name,
  loading = false,
  setValue,
}: {
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}) {
  const [date, setDate] = useState<Date | null>(null);
  const [showDate, setShowDate] = useState(false);
  return (
    <>
      <TextInput
        className="h-12 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100"
        placeholder={"--/--/----  -  --:-- ----"}
        placeholderTextColor={"#111827"}
        editable={false}
        onPress={!loading ? () => setShowDate(true) : undefined}
        value={
          date
            ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? "p.m." : "a.m."}`
            : ""
        }
      />
      {showDate && (
        <DateTimePickerModal
          mode="datetime"
          display="inline"
          isVisible={showDate}
          onConfirm={(date) => {
            setDate(date);
            setShowDate(false);
            setValue((prev) => ({
              ...prev,
              [name]: date,
            }));
          }}
          onCancel={() => setShowDate(false)}
          cancelTextIOS="Cerrar"
          confirmTextIOS="Confirmar"
          accentColor={Colors.primary.default}
          locale="es_mx"
          buttonTextColorIOS={Colors.primary.default}
          isDarkModeEnabled={false}
          themeVariant="light"
        />
      )}
    </>
  );
}
