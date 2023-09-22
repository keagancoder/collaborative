package com.citi.collaborative.service;


import com.citi.collaborative.common.InternalResponse;
import com.citi.collaborative.common.Ops;
import com.citi.collaborative.domain.Org;
import com.citi.collaborative.service.api.IOrgService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.stream.Collectors;

@Service
public class OrgService extends AbstractService<Org> implements IOrgService {

    /**
     * Recommend organization by {@code keyWord}
     *
     * @param keyWord
     * @return
     */
    public Collection<Org> recommend(String keyWord) {
        InternalResponse<Org> response = findAll(Ops.<Org>builder().build(), Org.class);
        if (!response.isSuccess()) {
            return Collections.emptyList();
        }

        return response.getData()
                .parallelStream()
                .filter(org -> org.getFunction().contains(keyWord))
                .collect(Collectors.toSet());
    }

}
