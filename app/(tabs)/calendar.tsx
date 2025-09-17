import { TouchableOpacity, View } from "react-native";
import "@/constants/calendarLocale";
import {
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import { Colors } from "@/constants/Colors";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import CalendarItem, { EmptyCalendarItem } from "@/components/ui/CalendarItem";
import { useFocusEffect, useNavigation } from "expo-router";
import { PlusIcon } from "@/components/ui/Icons";
import BlockerModal from "@/components/BlockerModal";

const EVENTS = [
  {
    title: "2025-09-15",
    data: [
      {
        type: "Blocker",
        service: {
          folio: "$service.folio",
          status: "$service.status",
          address: "$service.address",
        },
        startTime: "10:00",
        endTime: "12:00",
        description: "Reunion del equipo",
      },
      {
        type: "Service",
        service: {
          folio: "$service.folio",
          status: "$service.status",
          address: "$service.address",
        },
        startTime: "10:00",
        endTime: "12:00",
      },
    ],
  },
  {
    title: "2025-09-14",
    data: [
      {
        type: "Blocker",
        service: {
          folio: "$service.folio",
          status: "$service.status",
          address: "$service.address",
        },
        startTime: "10:00",
        endTime: "12:00",
      },
      {
        type: "Service",
        service: {
          folio: "$service.folio",
          status: "$service.status",
          address: "$service.address",
        },
        startTime: "10:00",
        endTime: "12:00",
      },
      {
        type: "Service",
        service: {
          folio: "$service.folio",
          status: "$service.status",
          address: "$service.address",
        },
        startTime: "10:00",
        endTime: "12:00",
      },
    ],
  },
];

export default function Calendar() {
  // Header configuration
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          className="mr-4"
          activeOpacity={0.7}
          onPress={() => setModalVisible(true)}
        >
          <PlusIcon color={Colors.primary.default} size={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const today = useMemo(() => getToday(), []);
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Display only the services of the selected date
  const filteredSections = useMemo(() => {
    return EVENTS.filter((section) => section.title === selectedDate);
  }, [selectedDate]);

  useFocusEffect(
    useCallback(() => {
      return () => setSelectedDate(today);
    }, [today])
  );

  return (
    <>
      <CalendarProvider
        date={selectedDate}
        onDateChanged={(date) => setSelectedDate(date)}
        style={{ backgroundColor: Colors.gray.light }}
      >
        <View className="bg-white">
          <WeekCalendar
            firstDay={1}
            allowShadow={false}
            theme={{
              textSectionTitleColor: Colors.black.default,
              todayTextColor: Colors.primary.default,
              dayTextColor: Colors.black.default,
              textDayFontWeight: "400",
              selectedDayBackgroundColor: Colors.primary.background,
              selectedDayTextColor: Colors.primary.default,
            }}
            markedDates={{
              [selectedDate]: {
                disableTouchEvent: true,
              },
            }}
          />
        </View>

        <AgendaList
          stickyHeaderHiddenOnScroll={false}
          sections={
            filteredSections.length > 0
              ? filteredSections
              : [{ title: selectedDate, data: [{}] }]
          }
          renderItem={({ item }) => {
            if (!item || Object.keys(item).length === 0)
              return <EmptyCalendarItem />;
            return <CalendarItem data={item} />;
          }}
        />
      </CalendarProvider>

      {/* Modal */}
      <BlockerModal isVisible={modalVisible} showModal={setModalVisible} />
    </>
  );

  function getToday(): string {
    return format(new Date(), "yyyy-MM-dd");
  }
}
