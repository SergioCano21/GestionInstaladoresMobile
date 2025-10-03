import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { KeyboardTypeOptions, Pressable, Text, TextInput } from "react-native";
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
  value,
}: {
  placeholder: string;
  type?: "text" | "password" | "email" | "number";
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  value: string | number | undefined;
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
      value={value?.toString() ?? ""}
      editable={!loading}
    />
  );
}

export function InputArrayText<T>({
  placeholder,
  type = "text",
  name,
  loading = false,
  setValue,
  value,
}: {
  placeholder: string;
  type?: "text" | "password" | "email" | "number";
  name: keyof T;
  loading?: boolean;
  setValue: (field: keyof T, value: string | number) => void;
  value: string | number | undefined;
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
        setValue(name, type === "number" ? Number(text) : text)
      }
      value={value?.toString() ?? ""}
      editable={!loading}
    />
  );
}

export function InputDate<T>({
  name,
  loading = false,
  setValue,
  value,
}: {
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  value: Date | null;
}) {
  const [showDate, setShowDate] = useState(false);

  return (
    <>
      <Pressable onPress={!loading ? () => setShowDate(true) : undefined}>
        <TextInput
          className="h-12 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100"
          placeholder={"--/--/----"}
          placeholderTextColor={"#111827"}
          editable={false}
          onPress={() => setShowDate(true)}
          value={
            value
              ? `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`
              : ""
          }
        />
      </Pressable>
      {showDate && (
        <DateTimePickerModal
          mode="date"
          display="inline"
          isVisible={showDate}
          onConfirm={(date) => {
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
  value,
}: {
  placeholder: string;
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  value: string | undefined;
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
      value={value}
    />
  );
}

export function InputTimeAndDate<T>({
  name,
  loading = false,
  setValue,
  value,
}: {
  name: keyof T;
  loading?: boolean;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  value: Date | null;
}) {
  const [showDate, setShowDate] = useState(false);

  return (
    <>
      <Pressable onPress={!loading ? () => setShowDate(true) : undefined}>
        <TextInput
          className="h-12 px-3 leading-5 text-lg bg-gray-100 rounded-md text-gray-900 border-2 border-gray-100"
          placeholder={"--/--/----  -  --:-- ----"}
          placeholderTextColor={"#111827"}
          editable={false}
          value={
            value
              ? `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()} - ${value.getHours()}:${value.getMinutes()} ${value.getHours() >= 12 ? "p.m." : "a.m."}`
              : ""
          }
        />
      </Pressable>
      {showDate && (
        <DateTimePickerModal
          mode="datetime"
          display="inline"
          isVisible={showDate}
          onConfirm={(date) => {
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
