import { apiGetServices } from "@/api/services";
import Screen from "@/components/Screen";
import { ServiceCard } from "@/components/ServiceCard";
import { EmptyCompletedService } from "@/components/ui/EmptyState";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { QUERY_KEYS } from "@/constants/Constants";
import { Service } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";

export default function CompletedServices() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED],
    queryFn: () => apiGetServices("completed"),
  });

  const serviceItem: ListRenderItem<Service> = useCallback(
    ({ item }) => <ServiceCard service={item} type="completed" />,
    []
  );

  const keyExtractor = useCallback((item: Service) => item._id, []);

  const renderContent = () => {
    if (isLoading) return <LoadingSpinner />;
    if (!services?.length) return <EmptyCompletedService />;

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={services}
        scrollEnabled={false}
        renderItem={serviceItem}
      />
    );
  };

  return <Screen>{renderContent()}</Screen>;
}
